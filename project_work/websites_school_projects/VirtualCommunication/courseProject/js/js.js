$(document).ready(function() {
    $('body > div#page > header > h1').hide();
    $('body > div#page >  header > h1').toggle(slide, function() {
    });
});

$(function() {
    var $top1 = $('#nav').offset().top + 20;
    $(window).scroll(function() {

        if ($(window).scrollTop() > $top1) {
            $('#nav').addClass('floater');
            $('footer a.top').fadeIn(200);
        } else {
            $('#nav').removeClass('floater');
            $('footer a.top').fadeOut(200);
        }
    });
    $('footer a.top').click(function(event) {
        event.preventDefault();
        $(this).css('display', 'none');
        $('html, body').animate({scrollTop: 0}, 300);

    });
});