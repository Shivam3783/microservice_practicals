var mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 8080;

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "customers"
    }
);
var sql = 'INSERT INTO customer (order_id,name,phone_number) VALUES (?, ?, ?);';

app.post('/api/insert/multiple', (req, res) => {
    const records = req.body; 
    
    // Iterate through the records and insert them into the database
    records.forEach(record => {
        const { order_id, name, phone_number } = record;

        con.query(sql, [order_id, name, phone_number], function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Inserted record with order_id ${order_id}`);
            }
        });
    });

    res.send("Inserting multiple records...");
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});