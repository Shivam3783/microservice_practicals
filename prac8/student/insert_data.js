var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const databaseName = 'student'; 
const collectionName = 'cba'; 

MongoClient.connect(url, function (err, db2) {
  if (err) throw err;
  var dbo = db2.db(databaseName);
  var studentDetails = [
    {name: 'Student 1',age: 20,address: 'Address 1',phoneNumber: '123-456-7890',email: 'student1@example.com'},
    {name: 'Student 2',age: 21,address: 'Address 2',phoneNumber: '987-654-3210',email: 'student2@example.com'},
    {name: 'Student 3',age: 22,address: 'Address 3',phoneNumber: '111-222-3333',email: 'student3@example.com'},
    {name: 'Student 4',age: 23,address: 'Address 4',phoneNumber: '555-555-5555',email: 'student4@example.com'},
    {name: 'Student 5',age: 24,address: 'Address 5',phoneNumber: '999-999-9999',email: 'student5@example.com'},
    {name: 'Student 6',age: 25,address: 'Address 6',phoneNumber: '444-444-4444',email: 'student6@example.com'},
    {name: 'Student 7',age: 26,address: 'Address 7',phoneNumber: '777-777-7777',email: 'student7@example.com'},
    {name: 'Student 8',age: 27,address: 'Address 8',phoneNumber: '888-888-8888', email: 'student8@example.com'},
    {name: 'Student 9',age: 28,address: 'Address 9',phoneNumber: '666-666-6666',email: 'student9@example.com'},
    {name: 'Student 10',age: 29,address: 'Address 10',phoneNumber: '222-222-2222',email: 'student10@example.com'}

  ];

  dbo.collection(collectionName).insertMany(studentDetails, function (err, res) {
    if (err) throw err;
    console.log(res);
    console.log("The count of total students whose data has been inserted are : " + res.insertedCount);
    db2.close();
  });
});
