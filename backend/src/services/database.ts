
const { MongoClient, ServerApiVersion } = require('mongodb');
import { MONGO_URL } from '../config';

const client = new MongoClient(MONGO_URL, {
  serverApi: ServerApiVersion.v1
});

export
async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Error connecting to MongoDB', e);
  }
}

export
async function disconnect() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (e) {
    console.error('Error disconnecting from MongoDB', e);
  }
}