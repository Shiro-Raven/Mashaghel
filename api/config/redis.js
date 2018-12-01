var redis = require('redis');
var redisClient = redis.createClient({
  retry_strategy: function (options) {
    if (options.attempt > 2) {
      console.log('Giving up on Redis.')

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
