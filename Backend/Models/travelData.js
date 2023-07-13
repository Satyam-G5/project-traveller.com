const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    stateName: {
        type: String,
        required: true
    },
    HotelName: {
        type: String,
        required: true
    },
    guideName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    amount: Number,
    hotelLocation: {
        type: String,
    },
    singleRoom: Number,
    doubleRoom: Number,
    email: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    jdate: {
        type: String
    }
});

module.exports = mongoose.model("travelData", userData);
