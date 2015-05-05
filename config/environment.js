/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'restinme',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['*'],
      routeAfterAuthentication: 'dashboard'
    }
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'default-src': "'none' *",
      'script-src': "'self' *",
      'font-src': "'self' *",
      'style-src': "'self' *",
      'connect-src': "'self' *",
      'img-src': "'self' *",
      'media-src': "'self'"
    }

    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'http://dev.rest-in.me:9292/login',
      identificationField: 'email'
    }

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'http://rest-in.me/login',
      identificationField: 'email'
    }
  }

  return ENV;
};
