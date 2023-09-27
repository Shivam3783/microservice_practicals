var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const databaseName = 'student'; 
const collectionName = 'cba'; 

MongoClient.connect(url, function (err, db2) {
  if (err) throw err;
  var dbo = db2.db(databaseName);
  
  var query = { age: { $gt: 16 } };

  dbo.collection(collectionName).find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log("The students whose age is greater than 16: ");
    console.log(result);
    db2.close();
  });
});
