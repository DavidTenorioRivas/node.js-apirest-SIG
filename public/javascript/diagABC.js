$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.carousel').carousel();

});

    (function($){
        $(function(){

            $('.button-collapse').sideNav();
            $('.parallax').parallax();

        }); // end of document ready
    })(jQuery);//

function mensaje() {
    Materialize.toast('PRODUCTO AGREGADO', 3500);
}