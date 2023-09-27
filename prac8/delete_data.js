var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db2) {
  if (err) throw err;
  var dbo = db2.db("db2");
  var myquery = { name: 'shivam(cba-19)' };
  dbo.collection("mycollection").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db2.close();
  });
});
