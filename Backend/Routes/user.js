const express = require("express");
const router = express.Router();
const Userschema = require("../Models/Userschema");
const fetchuser = require('../Middleware/fetchuser'); // Middleware

// installed npm pakages ...........
const { body, validationResult } = require('express-validator');  // for input validation
const bcrypt = require("bcryptjs"); // hashing
const jwt = require("jsonwebtoken"); // sending JWT tokens 


const jwt_secretkey = "justsomesercetknowntonooneexceptme"  // JWT secret key for token generation 

// **********************     ROUTE : 1  Creating a user using POST "/createuser" (without login)  ******************************
router.post("/createuser", [

    // Using validator
    body("Name", "Enter a valid email").isLength({ min: 3, max: 40 }),
    body("age", "Enter a valid age ").isLength({ min: 2, max: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 })

], async (req, res) => {
    const errors = validationResult(req);
    // check for errors .........
    if (!errors.isEmpty()) {
        return res.json(errors);
    }
    // no error found then try this 
    else {
        try {

            // hashing the password 
            const salt = await bcrypt.genSalt(8);  // generating salt 
            const hashpass = await bcrypt.hash(req.body.password, salt);  // generation of hash 

            // Creating a new user 
            let userschema = new Userschema({
                Name: req.body.Name,
                age: req.body.age,
                email: req.body.email,
                password: hashpass
            });

            // const data = userschema.id;  //  use this or 

            const data = {
                userschema: {
                    id: userschema.id
                }
            }
            // creating jwt web tokens ...

            const jwt_token = jwt.sign(data, jwt_secretkey);
            res.json(jwt_token); // displaying token


            await userschema.save();  // saves in database 
        }    // try - catch block 
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server error" });
        }
    }
});


// ************************ROUTE : 2 Authenticating the user using POST "/createuser" (without login) *******************************
router.post("/userlogin", [

    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be empty ").isLength({ min: 5 }).exists()

], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    // check for errors .........
    if (!errors.isEmpty()) {
        return res.json(errors);
    }

    const { email, password } = req.body // destructuring 
    try {
        // If email is not present then -------
        let userschema = await Userschema.findOne({ email });
        if (!userschema) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        else {
            // compairing hashes (password)
            const password_compare = await bcrypt.compare(password, userschema.password)
            if (!password_compare) {
                success = false
                return res.status(400).json({ success, error: "Please try to login with correct credentials" });
            }

            const data = {
                userschema: {
                    id: userschema.id
                }
            }
            // creating jwt web tokens ...

            const jwt_token = jwt.sign(data, jwt_secretkey);
            success = true;
            res.json({ success, jwt_token }) // displaying token
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication Server error" });
    }
});

//*************** ROUTE : 3 Get loggedin user details using POST "/getuser" (with login) *******************************

router.get("/getuser", fetchuser, async (req, res) => {  // Using a middleware

    try {
        user_id = req.userschema.id;
        const userschema = await Userschema.findById(user_id).select("-password")
        res.send(userschema);
        console.log("sent userschema from backend", userschema)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication Server error" });
    }
})

module.exports = router;
