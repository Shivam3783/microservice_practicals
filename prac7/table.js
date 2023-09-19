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
    con.query("Create table customers (order_id int primary key,name varchar(50),address varchar(50),phonenumber bigint,age int);", function (err, result) {
        if (err) throw err;
        console.log("Created Table ");

    });
});