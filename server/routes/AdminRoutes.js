const express = require('express')

const ProductController = require('../Controller/products/ProductController')
const AdminController = require('../Controller/Admin/AdminController')

const router = express.Router()

router.post('/adminSignup',AdminController.adminSignup)
router.post('/adminLogin',AdminController.adminSignup)

module.exports = router