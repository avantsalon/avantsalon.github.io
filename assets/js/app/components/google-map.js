define(function () {
    return {
        init: function() {
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
    }
});