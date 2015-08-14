$(document).ready(function() {
    // $('body').scrollspy();
    if ($(window).width() < 769) {
        $('.navbar-default').removeClass("sticky").removeClass("navbar-fixed-top").addClass("navbar-static-top");
    }

    if ($(window).width() > 768) {
        $('.navbar-default').addClass('navbar-fixed-top');
    }


    $(window).scroll(function() {
        scrollNav();
    });

    function scrollNav() {
        $('.nav a').click(function() {
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
            }, 400);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

});

