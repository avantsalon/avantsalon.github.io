define(function (require) {
    require('match-height');

    var heroCarousel = require('./components/hero-carousel');
    var navLinks = require('./components/navigation-links');
    var hoursOfOperations = require('./components/hours-of-operation');
    var equiHeight = require('./components/equi-height');
    var googleMaps = require('./components/google-map');

    $(document).ready(function () {
        heroCarousel.init();
        navLinks.init();
        hoursOfOperations.init();
        equiHeight.init();
        googleMaps.init();
    });
});