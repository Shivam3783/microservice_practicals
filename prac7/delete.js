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
    con.query("delete from customers WHERE phonenumber = 12345;", function (err, result) {
        if (err) throw err;
        console.log("Record Deleted");

    });
});