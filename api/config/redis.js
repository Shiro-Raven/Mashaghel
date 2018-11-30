var redis = require('redis');
var redisClient = redis.createClient();

// Print redis errors to the console
redisClient.on('error', (err) => {
  console.log('-' + err);
});

redisClient.on('connect', () => {
  console.log('Connected to redis.');
});

module.exports = redisClient;
