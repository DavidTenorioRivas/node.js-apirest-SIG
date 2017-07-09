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
            var prueba = 0;
            var prueba2 = 0;
            for (var i in array) {

                uniteTotal += array[i].uniteProduct;
                sumaUnite += array[i].uniteProduct;
                prueba = (array[i].uniteProduct / sumaUnite) * 100;
                prueba2 += prueba;
                console.log(prueba);
                //console.log(array[i].uniteProduct);
                costoTotal += array[i].costProduct;
                sumaCosto += array[i].costProduct;
                priceTotal += array[i].totalProdcut;
                sumaTotal += array[i].totalProdcut;

            }
            // console.log(prueba2);
            // console.log("suma costo" + sumaCosto.toFixed(2));
            // console.log("XXXXXXXXXXXXXXXXX" + prueba);
            // console.log("la suma es  " + sumaUnite + "  ");
            // console.log("unidades" + uniteTotal + "  ");
            // console.log("precio unitario" + costoTotal + "  ");
            // console.log("precio total" + priceTotal + "  ");
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
                    porcentaje: prueba.toFixed(2),
                    porcentajetoal: prueba2.toFixed(2)
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