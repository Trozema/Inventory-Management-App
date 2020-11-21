module.exports = function(app) {
  const Item = require('../controllers/item.controller.js');
  app.put('/update', Item.updateByID);
}
