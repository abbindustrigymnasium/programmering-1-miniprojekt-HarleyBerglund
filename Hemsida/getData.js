(function () {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function (callback) {
        if (window.jQuery) {
            callback(jQuery);
        } else {
            window.setTimeout(function () {
                checkReady(callback);
            }, 20);
        }
    };

    // Start polling...
    checkReady(function ($) {
        $(function () {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });
})();


$(function () {


    var people = [];

    $.getJSON('DB.json', function (data) {
        $.each(data.person, function (i, f) {
            var tblRow = "<tr>" + "<td>" + f.namn + "</td>" +
                "<td>" + f.livsmedelsnummer + "</td>" + "<td>" + f.kolhydrater + "</td>" + "<td>" + f.fett + 
                "</td>" + "</tr>" + f.fibrer + "</td>" + "</tr>"+ f.alkohol + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata tbody");
        });

    });

});