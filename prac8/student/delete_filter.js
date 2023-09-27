var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const databaseName = 'student'; 
const collectionName = 'cba'; 

MongoClient.connect(url, function (err, db2) {
  if (err) throw err;
  var dbo = db2.db(databaseName);
  
  var query = { phoneNumber: /6/ }; 

  dbo.collection(collectionName).find(query).toArray(function (err, deletedStudents) {
    if (err) throw err;

    dbo.collection(collectionName).deleteMany(query, function (err, result) {
      if (err) throw err;
      console.log("Number of student records deleted: " + result.deletedCount);

      if (deletedStudents.length > 0) {
        console.log("Deleted student records:");
        deletedStudents.forEach(function (student) {
          console.log("_id: " + student._id);
        });
      }

      db2.close();
    });
  });
});
