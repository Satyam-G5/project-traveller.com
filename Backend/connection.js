const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/airtech',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log("Connection Successfull ......")).catch((err) => console.log(err));