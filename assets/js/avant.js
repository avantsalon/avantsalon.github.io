avant = {
    init: function () {
        $(document).ready(function () {
            avant._initHeroCarousel();
            avant._initNavigationLinks();
            avant._initNavigationBarCollapse();
            avant._initHoursOfOperation();
            avant._initServiceHeights();
            google.maps.event.addDomListener(window, 'load', avant._initGoogleMap);
        });
    },

    _initHeroCarousel: function () {
        // helper function: taken from html5up.net
        window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

        var images = {
            'assets/images/stock/header_bg_2.jpg': 'center',
            'assets/images/stock/header_bg_3.jpg': 'center',
            'assets/images/stock/header_bg_1.jpg': 'center',
            'assets/images/stock/header_bg_4.jpg': 'center'

        };
        var delay = 6000;
        var currentPosition = 0;
        var lastPosition = 0;
        var bgList = [];

        var wrapperEl = $('#hero-carousel');

        for (var imageUrl in images) {
            var bgEl = document.createElement('div');
            bgEl.className = 'bg-image';
            bgEl.style.backgroundImage = 'url("' + imageUrl + '")';
            bgEl.style.backgroundPosition = images[imageUrl];
            wrapperEl.append(bgEl);

            bgList.push(bgEl);
        }

        bgList[currentPosition].classList.add('visible');
        bgList[currentPosition].classList.add('top');

        // Bail if we only have a single BG or the client doesn't support transitions.
        if (bgList.length == 1
            || !canUse('transition'))
            return;

        window.setInterval(function () {
            lastPosition = currentPosition;
            currentPosition++;

            // Wrap to beginning if necessary.
            if (currentPosition >= bgList.length)
                currentPosition = 0;

            // Swap top images.
            bgList[lastPosition].classList.remove('top');
            bgList[currentPosition].classList.add('visible');
            bgList[currentPosition].classList.add('top');

            // Hide last image after a short delay.
            window.setTimeout(function () {
                bgList[lastPosition].classList.remove('visible');
            }, delay / 2);

        }, delay);
    },

    _initNavigationBarCollapse: function () {
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
    },

    _initNavigationLinks: function () {
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
    },

    _initHoursOfOperation: function () {
        var openHoursEl = $('.current-hours-open');
        var hoursOpen = [
            'closed',
            'closed',
            'open from 9am to 9pm',
            'open from 9am to 9pm',
            'open from 9am to 9pm',
            'open from 9am to 9pm',
            'open from 9am to 9pm'
        ];

        var dateTime = new Date();
        var currentDayOfWeek = dateTime.getDay();
        var currentHoursOpen = hoursOpen[currentDayOfWeek];

        openHoursEl.html(currentHoursOpen);
    },

    _initServiceHeights: function () {
        $('.service-item .item-wrapper').matchHeight();
    },

    _initGoogleMap: function () {
        var avantLat = 41.558106;
        var avantLng = -93.769207;
        var avantLatLong = {lat: avantLat, lng: avantLng};

        var mapCanvas = document.getElementById('contact-map');
        var mapOptions = {
            center: new google.maps.LatLng(avantLat, avantLng),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };

        var gmap = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: avantLatLong,
            map: gmap,
            title: 'Avant Salon'
        });
    }
};