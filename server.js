const debug = require('debug')('server.js');

require('dotenv').config();
const Registry = require('oc').Registry;

const configuration = {
  tempDir: './temp/',
  verbosity: 1,
  baseUrl: process.env.NOW_URL || process.env.BASEURL,
  port: process.env.PORT || 3000,
  publishAuth: {
    type: 'basic',
    username: process.env.PUBLISH_USERNAME,
    password: process.env.PUBLISH_PASSWORD
  },
  s3: {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    path: `//s3.${process.env.S3_REGION}.amazonaws.com/${process.env.S3_BUCKET}/`,
    componentsDir: 'components'
  },
  dependencies: [],
  templates: [
    require('oc-template-jade'),
    require('oc-template-handlebars'),
    require('oc-template-react'),
    require('oc-template-es6')
  ]
};

// Instantiate the registry
// An express.js app is exposed as registry.app
const registry = new Registry(configuration);

registry.on('error:', (error) => {
  throw new Error(error);
});

registry.start(function (err, app) {
  if (err) {
    console.log('Registry failed to start');
    throw new Error(error);
    process.exit(1);
  }
});
