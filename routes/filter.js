module.exports = function(app) {
    const Item = require('../controllers/item.controller.js');
    app.get('/filter', Item.filter);
  }