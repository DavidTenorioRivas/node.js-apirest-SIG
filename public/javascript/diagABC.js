$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.carousel').carousel();

//     $.ajax({
//         type: 'POST',
//         data: JSON.stringify(totalGoodAnswerRequest),
//         contentType: 'application/json',
//         url: '/questions',
//         beforeSend: function () {
//             //loading
//         },
//         success: function (response, textStatus, jqXHR) {
//             if (response.status == "SUCCESS") {
//                 window.alert("Accesos CORRECTOS");
//                 location.href = 'graph';
//             } else {
//                 //window.alert("Accesos incorrectos");
//                 location.href = '/menu';
//             }
//         },
//         error: function (jqXHR, statusCode, errorThrown) {
//             console.log(jqXHR.responseJSON.message, errorThrown);
//             window.alert(jqXHR.responseJSON.message);
//         }
//     });

});

    (function($){
        $(function(){

            $('.button-collapse').sideNav();
            $('.parallax').parallax();

        }); // end of document ready
    })(jQuery);//