
const express = require('express')
const UserController = require('../Controller/User/UserController')

const router = express.Router()

router.post("/signup",UserController.UserSignupController)
router.post("/signin",UserController.UserloginController)
router.post("/login_with_google",UserController.google_loign)


module.exports = router