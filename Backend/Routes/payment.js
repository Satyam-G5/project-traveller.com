const express = require("express")
const router = express.Router()
const crypto = require("crypto")
const Payment = require("../Models/paymentModel")



const Razorpay = require('razorpay');


router.post("/payment", async (req, res) => {

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZOR_Pay_KEY_ID,
      key_secret: process.env.RAZOR_Pay_SECRET_KEY 
    });

    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options)
    res.json({ success: true, order })
  } catch (error) {
    console.log(error);
  }
})


router.post("/paymentDetails", async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const generated_signature = crypto.createHmac('sha256', process.env.RAZOR_Pay_SECRET_KEY )
    .update(body.toString())
    .digest('hex');

  if (generated_signature === razorpay_signature) {
    // res.json({
    //   success : true
    // })
    res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
  }
  else {
    res.redirect(`http://localhost:5173`)

  }
})

module.exports = router;