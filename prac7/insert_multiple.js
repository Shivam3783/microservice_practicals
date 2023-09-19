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
    con.query("insert into customers (order_id,name,address,phonenumber,age) VALUES(2,'vikas','chandigarh',1232435454,30),(3,'yashcba','punjab',43432343,32),(4,'abc','sciencecity',434343243,30),(5,'yash_gnu','jodphur',21244354,37);", function (err, result) {
        if (err) throw err;
        console.log("Inserted multiple values");

    });
});