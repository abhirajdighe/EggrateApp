const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    city:String,
    day:String,
    price:Number
});

module.exports = mongoose.model('eggrate',ProductSchema);