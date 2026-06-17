const express= require("express")
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware')
const razorpayController = require('../controllers/razorpay.controller')

router.post('/create-order', authMiddleware, razorpayController.createOrder);
router.post('/verify',authMiddleware,razorpayController.verifyPayment)

module.exports = router;


