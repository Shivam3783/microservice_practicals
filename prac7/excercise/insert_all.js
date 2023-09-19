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

    const valuesString = "(2, 'shivam2', 1232435454), " +
        "(3, 'shivam3', 4343234332), " +
        "(4, 'shivam4', 4343432423), " +
        "(5, 'shivam5', 2124435432)";

    const sql = "INSERT INTO customer (order_id, name, phone_number) VALUES " + valuesString;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Inserted multiple values");
        console.log("Values: " + valuesString);
    });
});
