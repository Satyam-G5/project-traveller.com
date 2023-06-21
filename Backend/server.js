const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000; // Later when hosting globally 

require("./connection")

const app = express()

app.use(express.json())   // build-in Middleware function for pasing json


// in routes folder (used for management)

app.use("/", require("./Routes/user"))  // dealing with the user registration 
app.use("/", require("./Routes/cmp"))   // dealing with the guide registration 


app.listen(port, () => {
    console.log(`Listening form port no ${port}`)
})

