/* jshint node: true */
require('dotenv').load();

module.exports = {
  "staging": {
    // you could have a staging env if you like
  },

  "development": {
    buildEnv: "development",
    store: {
      "host": "localhost",
      "port": 6379
    },
    assets: {
      "type": "s3",
      "accessKeyId": "AKIAIFM7MT2JTIHV6HBA",
      "secretAccessKey": process.env.S3_SECRET_ACCESS_KEY,
      "bucket": "location-aware-ember",
      "prefix": "development"
    }
  },

  "production": {
    buildEnv: "production",
    store: {
      host: 'ec2-107-22-167-67.compute-1.amazonaws.com',
      port: 6929,
      password: process.env.REDIS_PW,
      database: 0
    },
    assets: {
      "type": "s3",
      "accessKeyId": "AKIAIFM7MT2JTIHV6HBA",
      "secretAccessKey": process.env.S3_SECRET_ACCESS_KEY,
      "bucket": "location-aware-ember"
    }
  }
};
