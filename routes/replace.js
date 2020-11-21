module.exports = function(app) {
  const Item = require('../controllers/item.controller.js');
  app.put('/replace', Item.ReplaceItemName);
}
