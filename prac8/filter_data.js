var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db2) {
    if (err) throw err;
    var dbo = db2.db("db2");
    var query = { name: /^s/ };
    dbo.collection("mycollection").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db2.close();
    });
});
