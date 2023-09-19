var mysql = require('mysql2');
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234"
    }
);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("Create database users_management1", function (err, result) {
        if (err) throw err;
        console.log("Created Database");

    });
});