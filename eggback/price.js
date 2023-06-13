const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    city:String,
    date:String,
    price:String
});

module.exports = mongoose.model('eggrate',ProductSchema);