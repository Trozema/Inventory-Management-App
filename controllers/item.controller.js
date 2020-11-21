/* In this file, you will create all the code needed to perform CRUD operations using Mongoose. */
const Item = require('../models/item.model.js');
const mongoose = require('mongoose');

exports.create = function(req, res) {
    // Create and Save a new Item
    let ItemModel = new Item({
        InventoryItem: req.body.Name,
        Category: req.body.Category,
        Staff: req.body.Staff,
        Quantity: req.body.Quantity,
        UnitPrice: req.body.Price
    });
    ItemModel.save(function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Item." });
        } else {
            console.log(data);
            res.send('The Item has been added');
        }
    });
};

exports.findAll = function(req, res) {
    Item.find(function(err, Inventory) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving Items." });
        } else {
             res.json(Inventory);
            
        }
    });
}

exports.filter = function(req, res) {
    Item.find({"Quantity":{$lte:20}},function(err, Items) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving Items." });
        } else {
             res.json(Items);
            
        }
    });
}

exports.updateByID = function(req, res) {
    let query = { _id: req.body.id };
    Item.findOneAndUpdate(query, { InventoryItem: req.body.InventoryItem, Category: req.body.Category, Staff: req.body.Staff, Quantity: req.body.Quantity, UnitPrice: req.body.UnitPrice}, { new: true }, function(err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send("ERROR: Not Updated. " + err);
        }
        res.send("Updated");
    });
}


exports.ReplaceItemName = function(req, res) {
    let query = { InventoryItem: req.body.Name1 };
    console.log(query)
    Item.updateMany(query, { InventoryItem: req.body.Name2 }, { new: true }, function(err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send("ERROR: Not Updated. " + err);
        }
        res.send("Updated");
    });
}

exports.deleteItemByName = function(req, res) {
    Item.findOneAndRemove({ InventoryItem: req.body.Name}, function(err) {
        if (err) {
            console.log("ERROR: Items NOT removed. " + err);
            res.send("ERROR: Items NOT removed. " + err);
        }
        res.send("Item removed");
    });
}