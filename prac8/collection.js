var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function (err, db2) {

    if (err) throw err;
    var dbo = db2.db("db2");
    dbo.createCollection("mycollection", function (err, res) {
        if (err) throw err;
        console.log("collection created");
        db2.close();
    });
});