const mongoose = require("mongoose")

// DEFINE SCHEMA
const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [ true, 'ADD A NAME?']
    },
    ImageURL:{
        type:String,
        required:[true, 'Put an image here']
    },
    Chest:{
        type: Number,
        required: [true, 'how many chests you have?']
    },
    Phrase:{
        type: String,
        required: [true, 'say a phrase']
    },
    pegleg:{
        type: Boolean,
        required: [true]
    },
    Position:{
        type:String,
        required: [true, 'what position']
    },
    eyepatch:{
        type: Boolean,
        required: [true]
    },
    hook:{
        type: Boolean,
        required: [true]
    },
}, {timestamps:true});

// REGISTER SHCEMA
const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;