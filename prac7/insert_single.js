var mysql = require('mysql2');
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "users_management"
    }
);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("insert into customers (order_id,name,address,phonenumber,age) VALUES(11,'rohit','Shilaj',12345,40);", function (err, result) {
        if (err) throw err;
        console.log("Inserted Single value");

    });
});