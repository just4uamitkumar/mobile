const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    screenSize:{
        type:Number,
        required:true
    },

    imgUrl:{
        type:String,
        required:true
    },

    rearCamera:{
        type:Number,
        required:true
    },

    frontCamera:{
        type:Number,
        required:true
    },

    fullName:{
        type:String,
        required:true
    },

    ramSize:{
        type:Number,
        required:true
    },

    battery:{
        type:Number,
        required:true
    },

    descript:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
});


module.exports = Item = mongoose.model('mobiles', ItemSchema);