var mysql = require("mysql");

function DataBaseHandler() {
    this.connection = null;
}
DataBaseHandler.prototype.createConnection = function () {
    this.connection = mysql.createConnection({
        host: 'localhost',
        user: "root",
        password: "",
        database: "SIG"
    });
    return this.connection;
};

module.exports = DataBaseHandler;