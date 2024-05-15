const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => console.error('Redis client not connected to the server:', err));
    this.client.on('connect', () => console.log('Redis client connected to the server'));
    this.getAsync = promisify(this.client.get).bind(this);
  }

  isAlive() {
    return this.client.connected;
  }
}

module.exports = new RedisClient();
