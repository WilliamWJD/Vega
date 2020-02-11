const Product = require('../models/Product')

class ProductController{
    async store(req,res){
        const { title, description } = req.body
        const product=await Product.create({title,description})
        return res.json(product)
    }
}

module.exports=new ProductController()