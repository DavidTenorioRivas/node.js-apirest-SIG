var express = require('express');
var router = express.Router();

var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();


router.get("/", function (req, res, next) {
    res.render("diagABC");
    console.log("estas en el metodo get diagramaaaaaaaaaaaaaaaaa");
});
router.post("/", function (req, res, next) {
    // console.log("estas enviando datos");
    // console.log("codido   " + req.body._codeProduct);
    // console.log("descripcion " + req.body._descriProduct);
    // console.log(" unidades  " + req.body._uniteProduct);
    // console.log("preciounitario" + req.body._costProduct);
    connection.query('CALL sp_PostProduct(?,?,?,?);',
        [req.body._codeProduct,
            req.body._descriProduct,
            req.body._uniteProduct,
            req.body._costProduct],
        function (err, result) {
            if (err) {
                throw err;
            }
            if (result.affectedRows == 1) {
                res.redirect("diagABC");
            } else {
                res.status(404).send({
                    status: "ERROR",
                    message: "An error happened"
                });
            }
            // res.status(202).send({
            //     status: "SUCCESS",
            //     message: "PRODUCT ADD",
            //     data: ""
            // });
        });
});
module.exports = router;