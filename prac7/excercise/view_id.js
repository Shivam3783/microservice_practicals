var mysql = require('mysql2');
var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "customers"
    });

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");

    con.query("SELECT * FROM customer WHERE order_id = 111;", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
