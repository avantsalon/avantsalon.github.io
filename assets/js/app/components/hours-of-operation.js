define(function () {
    var hoursOpen = [
        'closed',
        'closed',
        'open from 9am to 7pm',
        'open from 9am to 7pm',
        'open from 9am to 7pm',
        'open from 9am to 5pm',
        'open from 9am to 4pm'
    ];

    return {
        init: function() {
            var openHoursEl = $('.current-hours-open');
            var dateTime = new Date();
            var currentDayOfWeek = dateTime.getDay();
            var currentHoursOpen = hoursOpen[currentDayOfWeek];

            openHoursEl.html(currentHoursOpen);
        }
    }
});