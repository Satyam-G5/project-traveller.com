const mongoose = require("mongoose");



const userData = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    age: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Userschema", userData);

