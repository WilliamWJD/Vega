const Product = require('../models/Product')

class ProductController{
    async index(req,res){
        const products=await Product.find()
        return res.json(products)
    }

    async store(req,res){
        const { title, description, url } = req.body
        const product=await Product.create({title,description, url})
        return res.json(product)
    }
}

module.exports=new ProductController()