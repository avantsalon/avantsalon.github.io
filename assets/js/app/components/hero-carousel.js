define(function () {
    return {
        init: function() {
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
        }
    };
});