// @ts-ignore
require('dotenv').config();
var proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/graphql', {
      target: process.env.YELP_API_ENDPOINT,
      changeOrigin: true,
      pathRewrite: { '^/graphql': '' },
    })
  );
};
