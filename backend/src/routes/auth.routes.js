const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')
const authMiddleware = require("../middleware/auth.middleware");

router.get("/profile", authMiddleware,authController.getprofile);

 router.post('/signup',authController.signup)
router.post('/verify', authController.verifyOTP)
 router.post('/login',authController.login)

module.exports = router;


