var express = require('express');
var router = express.Router();

var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

router.get("/", function (req, res, next) {
    //console.log("estas en el metodo get tableeeeeeeeeeeeeeee");
    //res.render("tableABC",{nombre: result[0]});
    //console.log("******"+res);
    connection.query('CALL sp_GetProducts();', [],
        function (error, result, fields) {
            console.log("result" + result[0]);
            var array = result[0];
            var uniteTotal = "";
            var costoTotal = "";
            var priceTotal = "";
            var sumaUnite = 0;
            var sumaCosto = 0;
            var sumaTotal = 0;
            var porcentajeacu = 0;
            var porcentaje = 0;
            var portotal = 0;
            var poracutotal = 0;

            for (var i in array) {

                uniteTotal += array[i].uniteProduct;
                sumaUnite += array[i].uniteProduct;
                //console.log(array[i].uniteProduct);
                costoTotal += array[i].costProduct;
                sumaCosto += array[i].costProduct;
                priceTotal += array[i].totalProdcut;
                sumaTotal += array[i].totalProdcut;

            }
            var total = sumaUnite;
            var total2 =sumaTotal;
            for (j in array) {
                porcentajeacu += (array[j].uniteProduct / total) * 100;
                array[j].david = porcentajeacu;
                porcentaje = (array[j].uniteProduct / total) * 100;
                array[j].juan = porcentaje;

                portotal += (array[j].totalProdcut / total2) * 100;
                array[j].tenorio = portotal;

                poracutotal = (array[j].totalProdcut / total2) * 100;
                array[j].rivas = poracutotal;
                if (array[j].tenorio < 50){
                    array[j].clase = "A";
                    console.log("clase A"+array[j].tenorio);
                }
                else if (array[j].tenorio>=50 && array[j].tenorio<=85){
                    array[j].clase = "B";
                    console.log("clase B"+array[j].tenorio);
                }
                else {
                    array[j].clase = "C";
                    console.log("clase C"+array[j].tenorio);
                }
            }
            console.log(array[j].david);
            // var cadena =[1,2,3,4,5];
            // var cadena2 =[1,2,3,4,5];
            // localStorage.cadena=cadena;
            // localStorage.cadena2=cadena2;
            // console.log(porcentajeacu);
            // console.log(portotal);
            // console.log(total);
            // var cadena = result;
            // if (cadena.length > 0) {
            //     var atributos = "";
            //     for (var aux in cadena[0])
            //         atributos += aux + " ";
            //     console.log("Los atributos son: " + atributos);
            // }

            if (error) throw error;
            if (result[0].length > 0) {
                res.render("tableABC", {
                    status: "SUCCESS",
                    message: "Get Product",
                    data: result[0],
                    sumaUnite: sumaUnite,
                    sumaCosto: sumaCosto.toFixed(2),
                    sumaTotal: sumaTotal.toFixed(2),
                    porcentajetotal: porcentajeacu.toFixed(2),
                    porcentajeacutotal: portotal.toFixed(2),
                });
            } else {
                res.status(404).send({
                    status: "ERROR",
                    message: "An error happened"
                });
            }

        });


});

module.exports = router;