avant = {
    init: function () {
        $(document).ready(function () {
            avant._initNavigationBar();
            avant._initServiceHeights();
            google.maps.event.addDomListener(window, 'load', avant._initGoogleMap);
        });
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
    },

    _initNavigationBar: function () {
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

    _initServiceHeights: function () {
        $('.service-item .item-wrapper').matchHeight();
    }
};