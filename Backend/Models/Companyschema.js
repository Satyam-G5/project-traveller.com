const mongoose = require("mongoose");

const companyData = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },


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

module.exports = mongoose.model("Companyschema", companyData);

