const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    products:[
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity:{
                type: Number,
                default:1 
            }
        }
    ]
},{timestamps: true })

const User =  mongoose.model('Cart',cartSchema)
module.exports = User;