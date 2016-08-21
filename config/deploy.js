/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
    s3: {
      "accessKeyId": "AKIAIFM7MT2JTIHV6HBA",
      "secretAccessKey": process.env.S3_SECRET_ACCESS_KEY,
      "bucket": "location-aware-ember",
      "prefix": "development"
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.redis = {
      host: 'localhost',
      port: 6379
    };
  }

  if (deployTarget === 'staging') {
    // Not implemented for this demo

    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here

    ENV.s3.prefix = undefined;

    ENV.redis = {
      host: 'ec2-107-22-167-67.compute-1.amazonaws.com',
      port: 6929,
      password: process.env.REDIS_PW,
      database: 0
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
