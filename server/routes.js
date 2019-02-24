module.exports = function(app) {
  const root = require('./Routing/root');
  const api = require('./Routing/api');
  app.use('/', root);
  app.use('/api', api);
};
