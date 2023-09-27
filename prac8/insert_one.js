var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db2) {
    if (err) throw err;
    var dbo = db2.db("db2");
    var empdetails = { name: "shivam(cba-19)", address: "ganpat university" };
    dbo.collection("mycollection").insertOne(empdetails, function (err, res) {
        if (err) throw err;
        console.log("single employee data inserted");
        db2.close();
    });
});