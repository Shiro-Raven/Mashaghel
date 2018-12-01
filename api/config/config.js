/*eslint-disable */
module.exports = {
  ENV: process.env.NODE_ENV,
  MONGO_URI: this.ENV === 'prod' ? 'mongodb://localhost:27017/mashaghel-docker' : 'mongodb://localhost:27017/mashaghel',
  REDIS_URL: process.env.REDIS_URL,
  PORT: process.env.SERVER_PORT,
  SECRET: ';iN.yVt,Tmu44cZkX#.|tS>s`4xb;-oRe66iMz0[L^e9;ltF_5"DUvPphj:f:&',
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};
