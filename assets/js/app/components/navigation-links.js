define(function (require) {
    var initNavLinkScrollTo = function() {
        var scrollToElement = function (element, duration) {
            $('html, body').animate({
                scrollTop: element.offset().top - 75
            }, duration);
        };

        var navLinks = $('.nav-link');

        $.each(navLinks, function (index, navLink) {
            var EXPANDED_CLASS = 'expanded';
            var WAIT_TIMER = 280;

            navLink = $(navLink);
            var navbarHeader = $('nav .navbar-header');
            var navbarCollapse = $('.navbar-collapse');
            var scrollToSelector = navLink.attr('scrollTo');
            var scrollToEl = $(scrollToSelector);

            navLink.unbind().click(function () {
                navbarCollapse.collapse('hide');
                setTimeout(function () {
                    navbarHeader.removeClass(EXPANDED_CLASS);
                }, WAIT_TIMER)

                scrollToElement(scrollToEl, 500);
            });
        });
    };

    var initMenuToggle = function () {
        var EXPANDED_CLASS = 'expanded';
        var WAIT_TIMER = 280;

        var navbarToggleButton = $('nav .navbar-header button.navbar-toggle');
        var navbarHeader = $('nav .navbar-header');

        navbarToggleButton.click(function () {
            // allow time for menu to slide up
            if (navbarHeader.hasClass(EXPANDED_CLASS)) {
                setTimeout(function () {
                    navbarHeader.removeClass(EXPANDED_CLASS);
                }, WAIT_TIMER)
            }
            else {
                navbarHeader.addClass(EXPANDED_CLASS);
            }
        });
    };

    return {
        init: function() {
            initNavLinkScrollTo();
            initMenuToggle();
        }
    }
});