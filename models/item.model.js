const mongoose = require ( 'mongoose' );

let InventorySchema = mongoose.Schema({

InventoryItem:{
    type: String ,
    required: true
},
Category:{
    type: String ,
    required: true
},
Staff:{
    type: String ,
    required: true,
},
Quantity:{
    type: String ,
    required: true
    },
UnitPrice:{
    type: String ,
    required: true
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);