//TODO production URL to be added in deployment
module.exports = {
    //either dev or prod
    ENV: 'dev',
    MONGO_URI: this.env === 'prod' ? '' : 'mongodb://localhost:27017/sqs-ben',
    PORT: 3000,
    SECRET: ';iN.yVt,Tmu44cZkX#.|tS>s`4xb;-oRe66iMz0[L^e9;ltF_5"DUvPphj:f:&',
    EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};
