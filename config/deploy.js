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
      "bucket": "location-aware-ember"
    }
  }
};
