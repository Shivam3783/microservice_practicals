const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const databaseName = 'student'; 
const collectionName = 'cba'; 

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(databaseName);

  db.createCollection(collectionName, (createErr, collection) => {
    if (createErr) {
      console.error('Error creating collection:', createErr);
    } else {
      console.log(`Collection "${collectionName}" created successfully in database "${databaseName}"`);
    }

    client.close();
  });
});
