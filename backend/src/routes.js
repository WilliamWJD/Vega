const express = require('express')

const ProductController = require('./app/controllers/ProductController')

const routes = express.Router()

routes.get('/products', ProductController.index)
routes.get('/products/:product_id', ProductController.show)
routes.post('/products', ProductController.store)

module.exports=routes