// utils/db.js

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'your_db_name';

class DBClient {
  constructor() {
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect().then(() => {
      console.log('Connected to MongoDB');
      this.db = this.client.db(dbName);
    }).catch((err) => console.error('Failed to connect to MongoDB:', err));
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

module.exports = new DBClient();
