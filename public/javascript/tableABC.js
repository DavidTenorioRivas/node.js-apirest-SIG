$(document).ready(function () {
    $('.parallax').parallax();
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.carousel').carousel();
    // var uni = localStorage.cadena;
    // var total = localStorage.cadena2;
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            // ['Year', 'Sales'],
            // ['2013',  1000],
            // ['2014',  1170],
            // ['2015',  660],
            // ['2016',  1030]
            uni, total
        ]);

        var options = {
            title: 'DIAGRAMA ABC',
            curveType: 'function',
            legend: {position: 'bottom'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }


});

(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); //

