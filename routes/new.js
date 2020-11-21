module.exports = function(app) {
  const Item = require('../controllers/item.controller.js');
  app.post('/add', Item.create);
}
