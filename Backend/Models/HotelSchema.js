const mongoose = require("mongoose")

const hoteldata  = new mongoose.Schema({

    Hname : {
        type : String , 
        required : true 
    },
    singleroomprice : {
        type : Number , 
        required : true 
    },
    doubleroomprice : {
        type : Number , 
        required : true 
    },
    totalsinglerooms : {
        type : Number , 
        required : true 
    },
    totaldoublerooms : {
        type : Number , 
        required : true 
    },
    locationcity : {
        type : String,
        required : true 

    },
    locationstate : {
        type : String , 
        required : true 
    }
    
    

})

module.exports = mongoose.model("HotelSchema" ,hoteldata )