$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.carousel').carousel();

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['PERIODO', 'VENTAS'],
            ['2004',  10],
            ['2005',  25],
            ['2006',  49],
            ['2007',  73]
        ]);

        var options = {
            title: 'DIAGRAMA ABC',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }



});

(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); //

