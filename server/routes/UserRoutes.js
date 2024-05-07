
const express = require('express')
const UserController = require('../Controller/User/UserController')

const router = express.Router()

router.post("/signup",UserController.UserSignupController)
router.post("/signin",UserController.UserloginController)


module.exports = router