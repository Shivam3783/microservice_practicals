const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017/';
const databasename = "db2";

MongoClient.connect(url).then(async (client) => {
  const db = client.db(databasename);
  const collectionName = "mycollection"; // Replace with the name of your collection

  const collection = db.collection(collectionName);

  const documents = await collection.find({}).toArray();

  console.log("All documents in the collection:");
  console.log(documents);

  client.close();
}).catch((err) => {
  console.error(err);
});