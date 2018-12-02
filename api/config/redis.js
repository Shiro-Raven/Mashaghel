var redis = require('redis');
var config = require('./config');

// console.log(config.REDIS_URL);

var redisClient = redis.createClient(config.REDIS_URL, {
  port: 6379,
  retry_strategy: function (options) {
    if (options.attempt > 5) {
      console.log('Giving up on Redis.');

      return new Error('Exhausted all retrials');
    }

    // reconnect after
    return 1000;
  }
});

// Print redis errors to the console
redisClient.on('error', (err) => {
  console.log('-' + err);
});

// Print redis errors to the console
redisClient.on('reconnecting', (err) => {
  console.log('Trying to connect. Trial #' + err.attempt);
});

redisClient.on('connect', () => {
  console.log('Connected to redis.');
});

module.exports = redisClient;
