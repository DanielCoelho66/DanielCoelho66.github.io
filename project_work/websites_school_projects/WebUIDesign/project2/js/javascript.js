// function for back to top button
$(function() {
    $(window).scroll(function() {

        if ($(window).scrollTop()) {
            $('footer a#topbutton').fadeIn(200);
        } else {
            $('footer a#topbutton').fadeOut(200);
        }
    });
    $('footer a#topbutton').click(function(event) {
        event.preventDefault();
        $(this).css('display', 'none');
        $('html, body').animate({scrollTop: 0}, 300);

    });
});
	