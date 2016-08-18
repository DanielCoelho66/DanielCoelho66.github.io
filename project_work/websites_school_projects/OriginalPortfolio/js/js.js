$(document).ready(function() {
 //FIGCAPTION FUNCTION
    $('figcaption').each(function() {
        $(this).css('opacity', 0);
        $(this).css('width', $(this).siblings('img').width());
        $(this).parent().css('width', $(this).siblings('img').width());
        $(this).parent().css('height', $(this).siblings('img').height());
        $(this).css('display', 'block');
    });

    $('figure').hover(function() {
        $(this).children('figcaption').stop().fadeTo(500, 1);
    }, function() {
        $(this).children('figcaption').stop().fadeTo(500, 0);
    }); 
});

// BACK TO TOP FUNCTION 
$(function() {
    var $top1 = $('nav').offset().top + 20;
    $(window).scroll(function() {

        if ($(window).scrollTop() > $top1) {
            $('footer a.top').fadeIn(200);
        } else {
            $('footer a.top').fadeOut(200);
        }
    });
    $('footer a.top').click(function(event) {
        event.preventDefault();
        $(this).css('display', 'none');
        $('html, body').animate({scrollTop: 0}, 300);

    });
	

// 	RANDOM QUOTE GENERATOR FUNCTION		
// random quote generator inspired by http://www.computerhope.com/j15.htm	
quotes = [];
quotes[0] = "What separates design from art is that design is meant to be... functional.  - Cameron Moll";
quotes[1] = "Great web design without functionality is like a sports car with no engine.  - Trish Parr";
quotes[2] = "Websites should look good from the inside and out. - Paul Cookson";
quotes[3] = "If there's one thing you learn by working on a lot of different Web sites, it's that almost any design idea--no matter how appallingly bad--can be made usable in the right circumstances, with enough effort. - Steve Krug";
quotes[4] = "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for. - Milton Glaser";
quotes[5] = "It’s through mistakes that you actually can grow. You have to get bad in order to get good. - Paula Scher";

index = Math.floor(Math.random() * quotes.length);
var quote = document.getElementById("quote");
quote.textContent = quotes[index];
var text = quote.textContent;



});



