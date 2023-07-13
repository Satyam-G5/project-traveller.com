const express = require("express")
const router = express.Router();
const travelData = require("../Models/travelData")

const { body, validationResult } = require('express-validator');  // for input validation


router.post("/SetTraveldata",
    [
        body("stateName", "Correct state location").isLength({ max: 20, min: 4 }),
        body("HotelName", "Correct hotelName").isLength({ max: 20, min: 3 }),
        body("guideName", "Correct guidename").isLength({ max: 20, min: 3 }),
        body("userName", "Correct username").isLength({ max: 20, min: 3 }),
        body("amount", "Correct amount ").isLength({ max: 20, min: 2 }),
        body("hotelLocation", "Correct hotel location").isLength({ max: 20, min: 2 }),
        body("singleRoom", "Wrong Room single").isLength({ max: 20, min: 2 }),
        body("doubleRoom", "Wrong Room double").isLength({ max: 20, min: 2 }),
        // body("email", "Wrong input email").isEmail(),
        // body("gmail", "Wrong input gmail").isEmail(),
        body("jdate", "Correct date please").isDate(),

    ],
    async (req, res) => {
        const errors = validationResult(req);
        // check for errors .........
        if (!errors.isEmpty()) {
            return res.json(errors);
        } else {
            try {
                let TravelData = new travelData({
                    stateName: req.body.stateName,
                    HotelName: req.body.HotelName,
                    guideName: req.body.guideName,
                    userName: req.body.userName,
                    amount: req.body.amount,
                    hotelLocation: req.body.hotelLocation,
                    singleRoom: req.body.singleRoom,
                    doubleRoom: req.body.doubleRoom,
                    email: req.body.email,
                    gmail: req.body.gmail,
                    jdate : req.body.jdate
                });

                res.status(200).json(TravelData);

                await TravelData.save(); // saves in database
            } catch (error) {
                console.log(error)
            }
        }
    });



router.post("/userTravelData" ,[
    // body("email", "Enter the correct email ").isEmail() 
] , async (req , res) => {
    try {
        const { email } = req.body;
        const searchData = await travelData.find({email})
        res.status(200).json(searchData)
    } catch (error) {
        res.status(500).json("Server Error" , error)
    }
})

router.post("/guideTravelData" ,[
    // body("gmail", "Enter the correct email ").isEmail() 
] , async (req , res) => {
    try {
        const { gmail } = req.body;
        const searchData = await travelData.find({gmail})
        res.status(200).json(searchData)
    } catch (error) {
        res.status(500).json("Server Error" , error)
    }
})

module.exports = router;  