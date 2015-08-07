$(document).ready(function() {
    // $('body').scrollspy();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0.5) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if ($(window).width() < 769) {
            $('.navbar-default').removeClass("sticky").removeClass("navbar-fixed-top").addClass("navbar-static-top").css("background-color", "rgba(256,256,256,256,0.8");
        }

        if ($(window).width() > 768) {
            $('.navbar-default').addClass('navbar-fixed-top');
        }


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
        scrollNav();
        
        $(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        // $('a[href*=#]:not([href=#])').click(function() {
        //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        //         var target = $(this.hash);
        //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        //         if (target.length) {
        //             $('html,body').animate({
        //                 scrollTop: target.offset().top
        //             }, 1000);
        //             return false;
        //         }
        //     }
        // });
        //     $(".navbar-nav li a[href^='#']").on('click', function(e) {
        //         // prevent default anchor click behavior
        //         e.preventDefault();

        //         // store hash
        //         var hash = this.hash;

        //         // animate sections get stuck after several scrolls
        //         $('html, body').animate({
        //             scrollTop: $(this.hash).offset().top
        //         }, 300, function() {

        //             // when done, add hash to url
        //             // (default click behaviour)
        //             window.location.hash = hash;
        //         });

        //     });
        // });
        // function filterPath(string) {
        //     return string
        //         .replace(/^\//, '')
        //         .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
        //         .replace(/\/$/, '');
        // }
        // var locationPath = filterPath(location.pathname);
        // var scrollElem = scrollableElement('html', 'body');

        // $('a[href*=#]').each(function() {
        //     var thisPath = filterPath(this.pathname) || locationPath;
        //     if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
        //         var $target = $(this.hash),
        //             target = this.hash;
        //         if (target) {
        //             var targetOffset = $target.offset().top;
        //             $(this).click(function(event) {
        //                 event.preventDefault();
        //                 $(scrollElem).animate({
        //                     scrollTop: targetOffset
        //                 }, 400, function() {
        //                     location.hash = target;
        //                 });
        //             });
        //         }
        //     }
        // });

        // // use the first element that is "scrollable"
        // function scrollableElement(els) {
        //     for (var i = 0, argLength = arguments.length; i < argLength; i++) {
        //         var el = arguments[i],
        //             $scrollElement = $(el);
        //         if ($scrollElement.scrollTop() > 0) {
        //             return el;
        //         } else {
        //             $scrollElement.scrollTop(1);
        //             var isScrollable = $scrollElement.scrollTop() > 0;
        //             $scrollElement.scrollTop(0);
        //             if (isScrollable) {
        //                 return el;
        //             }
        //         }
        //     }
        //     return [];
        // }
        // $('body').scrollspy({ target: '.navbar', offset:80 });
    });
});
//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
