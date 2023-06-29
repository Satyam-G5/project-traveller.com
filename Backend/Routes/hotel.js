const express = require("express");
const router = express.Router();
const Hotel = require("../Models/HotelSchema")

const { body, validationResult } = require('express-validator');  // for input validation

// ********************************   Adding a hotel using POST (will only be accessed by admin panel )

router.post("/addhotel", [

    // Validation and addition of all feilds 

    body("Hname", "Enter a valid name ").isLength({ min: 3, max: 20 }),
    body("singleroomprice", "Enter a Numberic value ").isLength({ min: 1, max: 20 }),
    body("doubleroomprice", "Enter a Numberic value ").isLength({ min: 1, max: 20 }),
    body("totalsinglerooms", "Enter a Numberic value").isLength({ min: 1, max: 20 }),
    body("totaldoublerooms", "Enter a Numberic value ").isLength({ min: 1, max: 20 }),
    body("locationcity", "Enter a valid place ").isLength({ min: 2, max: 20 }),
    body("locationstate", "Enter a valid place ").isLength({ min: 2, max: 20 })



], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        try {
            // Adding a new hotels 
            const hotel = new Hotel({
                Hname: req.body.Hname,
                singleroomprice: req.body.singleroomprice,
                doubleroomprice: req.body.doubleroomprice,
                totalsinglerooms: req.body.totalsinglerooms,
                totaldoublerooms: req.body.totaldoublerooms,
                locationcity: req.body.locationcity,
                locationstate: req.body.locationstate,
            })

            res.send(hotel)


        await hotel.save() ;


        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Router Error" });


        }
    }

})


// Accessing all the hotels to choose from  --- by logged-in users 

router.get("/gethotels", async (req, res) => {  

    try {
        const hotel = await Hotel.find({})
        res.send(hotel);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication Server error" });
    }
})

module.exports = router;