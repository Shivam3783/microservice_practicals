var mysql = require('mysql2');
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "customers"
    }
);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("insert into customer (order_id,name,phone_number) VALUES(33,'NEW',12345);", function (err, result) {
        if (err) throw err;
        console.log("Inserted Single value");

    });
});