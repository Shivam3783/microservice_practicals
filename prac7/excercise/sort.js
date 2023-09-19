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
    con.query("select * from customer order by name;", function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});