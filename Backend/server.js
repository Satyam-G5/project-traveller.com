const express = require("express");

const path = require("path");
const cors = require("cors")
require('dotenv').config();
const port = process.env.PORT || 8000; // Later when hosting globally 

require("./connection")

const app = express()

const corsOptions = {
    origin: 'https://play-pals-zeta.vercel.app', // Allow requests from your client app
    methods: ['GET', 'POST'], // Add other methods you need
  };
  
  app.use(cors(
corsOptions    ));


app.use(express.json())   // build-in Middleware function for pasing json


// in routes folder (used for management)

app.use("/", require("./Routes/user"))  // dealing with the user registration 
app.use("/", require("./Routes/cmp"))   // dealing with the guide registration 
app.use("/", require("./Routes/hotel"))   // dealing with the hotels (registration with admin pannel and accessable by user)
app.use("/", require("./Routes/payment"))   // dealing with the payment details 
app.use("/", require("./Routes/travel"))   // dealing with the booking of the user and guide


app.listen(port, () => {
    console.log(`Listening form port no ${port}`)
})

