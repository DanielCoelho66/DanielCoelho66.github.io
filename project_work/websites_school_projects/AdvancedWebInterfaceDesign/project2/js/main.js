$(document).ready(function() {
    // TAB PANEL FUNCTION
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a:first').addClass('selected');
    $('div.tabs ul.tabNavigation a').click(function() {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });
});

// function for persistent nav
$(function() {
    var $top1 = $('nav').offset().top + 20;
    $(window).scroll(function() {

        if ($(window).scrollTop() > $top1) {
            $('nav').addClass('floater');
        } else {
            $('nav').removeClass('floater');
        }
    });
});
	