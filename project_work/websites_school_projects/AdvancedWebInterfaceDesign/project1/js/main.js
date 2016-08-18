// SLIDER FUNCTION
$(document).ready(function() {
    $('#slider .buttons').css({"visibility": "visible"});
    $('#slider .pager').css({"visibility": "visible"});
    $('#slider').tinycarousel({pager: true, interval: true});
});