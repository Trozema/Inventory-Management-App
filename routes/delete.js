module.exports = function(app) {
  const Item = require('../controllers/item.controller.js');
  app.delete('/delete', Item.deleteItemByName);
}
