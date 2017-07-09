var express = require("express");
var bodyParser = require('body-parser');
var session = require("express-session");

var menu = require('./routes/index');
var diagABC= require('./routes/diagABC');
var tableABC= require('./routes/tableABC');
var pronostico= require('./routes/pronostico');


var app = express();

app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/menu', menu);
app.use('/diagABC', diagABC );
app.use('/tableABC', tableABC );
app.use('/pronostico',pronostico );

app.listen(8123);