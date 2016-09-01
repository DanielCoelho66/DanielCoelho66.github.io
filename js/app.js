//menu slide in/out function
var main = function() {
  // pushes the nav over to the right
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "275px"
    }, 200);
  });

  // pushes the nav back to original spot
  $('.icon-close i').click(function() {
    $('.menu').animate({
      right: "-275px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
};


//gets the current time
function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(time, 500);
}

// adds a zero in front of numbers
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
} 

//gets the current date 
function todayDate() {
     var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
     var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"); 
     var currentDate = new Date();
     var dtString = weekday[currentDate.getDay()] + ", " + month[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
     document.getElementById("date"). innerHTML = dtString;
}

$(document).ready(main);

// function for persistent nav and back to top button
$(function() {
  var $top1 = $('header').offset().top + 20;
    $(window).scroll(function() {

        if ($(window).scrollTop() > $top1) {
            $('footer a.top').fadeIn(200);
        } else {
            $('footer a.top').fadeOut(200);
        }
    });
    $('footer a.top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
        $(this).css('display', 'none');

});

// BACK TO TOP FUNCTION 

// function to generate a random quote
// random quote generator inspired by http://www.computerhope.com/j15.htm
  $(function quoteGenerator() {

    quotes = [];
    quotes[0] = "What separates design from art is that design is meant to be... functional.  - Cameron Moll";
    quotes[1] = "Great web design without functionality is like a sports car with no engine.  - Trish Parr";
    quotes[2] = "Websites should look good from the inside and out. - Paul Cookson";
    quotes[3] = "If there's one thing you learn by working on a lot of different Web sites, it's that almost any design idea--no matter how appallingly bad--can be made usable in the right circumstances, with enough effort. - Steve Krug";
    quotes[4] = "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for. - Milton Glaser";
    quotes[5] = "It\'s through mistakes that you actually can grow. You have to get bad in order to get good. - Paula Scher";

    index = Math.floor(Math.random() * quotes.length);
    var quote = document.getElementById("quote");
    quote.textContent = quotes[index];
    var text = quote.textContent;
  });
});