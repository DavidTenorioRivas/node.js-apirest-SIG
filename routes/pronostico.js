var express = require('express');
var router = express.Router();

var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

router.get("/", function (req, res, next) {
    console.log("pronostico");
    res.render("pronostico");

});
module.exports = router;