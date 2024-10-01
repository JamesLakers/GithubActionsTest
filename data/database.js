import { MongoClient } from 'mongodb';

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

//const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://jlogan117:OqgMrtDDuRv9Mo7P@jamescluster.q8b5k.mongodb.net/?retryWrites=true&w=majority&appName=JamesCluster`;
console.log(uri);
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  console.log(clusterAddress);
  console.log(dbUser);
  console.log(dbPassword);
  console.log(dbName);
  console.log(uri);
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
