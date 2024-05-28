const express = require('express')

const ProductController = require('../Controller/products/ProductController')
const AdminController = require('../Controller/Admin/AdminController')

const router = express.Router()
//admin signup and login
router.post('/adminSignup',AdminController.adminSignup)
router.post('/adminLogin',AdminController.adminLogin)
// product related


router.post('/AddCategory',ProductController.AddCategory)
router.delete('/deleteCategory/:categoryid',ProductController.DeleteCategory)
module.exports = router