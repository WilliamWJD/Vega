const express = require('express')

const ProductController = require('./app/controllers/ProductController')

const routes = express.Router()

routes.post('/products', ProductController.store)

module.exports=routes