$(document).ready(function() {
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() >= $('#contact-bkcse').position()['top']) {
            $('.header').addClass('sticky');
        } else if ($(window).scrollTop() == 0) {
            $('.header').removeClass('sticky');
        }
    });
});
