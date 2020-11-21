module.exports = function(app) {
  const item = require('../controllers/item.controller.js');
  app.get('/item', item.findAll);
}
