const express = require("express");
const router = express.Router();
const Companyschema = require("../Models/Companyschema")
const fetchcompany = require("../Middleware/fetchcompany") 
// installed npm pakages ...........
const { body, validationResult } = require('express-validator');  // for input validation


const bcrypt = require("bcryptjs"); // hashing
const jwt = require("jsonwebtoken"); // sending JWT tokens 
const jwt_secretkey = "companysidesecreatkeyknownonlytome"  // JWT secret key for token generation (Company side )


//****************** Creating a new company using post request "http://localhost:8000/api/cmp/newcomp" *************************
router.post("/newcomp", [

    body("Name", "Enter a valid email").isLength({ min: 3, max: 40 }),
    body("age", "Enter a valid age ").isLength({ min: 2, max: 7 }),
    body("location", "Enter a name of the place ").isLength({ min: 2, max: 40 }),
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
            const salt = await bcrypt.genSalt(8);  // generating salt 
            const gpass = await bcrypt.hash(req.body.password, salt);  // generation of hash 

           
            let companyschema = new Companyschema({
                Name: req.body.Name,
                age: req.body.age,
                location: req.body.location,
                email: req.body.email,
                password: gpass
            });

            const data = {
                companyschema: {
                    id: companyschema.id
                }
            }
            // creating jwt web tokens ...

            const jwt_token = jwt.sign(data, jwt_secretkey);
            res.json(jwt_token); // displaying token


            await companyschema.save();  // saves in database 
        }    // try - catch block 
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server error" });
        }
    }
})

// // ************************ ROUTE : 2 Authenticating the Company using POST "http://localhost:8000/api/cmp/complogin" (without login) *******************************
router.post("/complogin", [

    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be empty").notEmpty()

], async (req, res) => {
    const errors = validationResult(req);
    // check for errors .........
    if (!errors.isEmpty()) {
        return res.json(errors);
    } else {

        const { email, password } = req.body // destructuring 
        try {
            // If email is not present then -------
            let companyschema = await Companyschema.findOne({ email });
            if (!companyschema) {
                res.status(400).json({ error: "Login with correct credentials  !!!" })
            }
            else {
                // compairing hashes (password)
                const password_compare = await bcrypt.compare(password, companyschema.password)
                if (!password_compare) {
                    res.status(400).json({ error: "wrong password !!!" })
                }

                const data = {
                    companyschema: {
                        id: companyschema.id
                    }
                }
                // creating jwt web tokens ...

                const jwt_token = jwt.sign(data, jwt_secretkey);
                res.json({ jwt_token }); // displaying token
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Authentication Server error" });
        }
    }
});

//*************** ROUTE : 3 Get loggedin company details using POST "api/user/getcmp" (without login) *******************************

router.get("/getcmp", async (req, res) => {  

    try {
        const companyschema = await Companyschema.find({})
        res.send(companyschema);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication Server error" });
    }
})

router.get("/getGuide" , fetchcompany , async (req , res) => {
    
    try {
        user_id = req.companyschema.id;
        const companyschema = await Companyschema.findById(user_id).select("-password")
        res.send(companyschema);
        console.log("sent userschema from backend", companyschema)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication Server error" });
    }
})

module.exports = router 