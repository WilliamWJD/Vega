const Product = require('../models/Product')

class ProductController{
    async store(req,res){
        const { title, description, url } = req.body
        const product=await Product.create({title,description, url})
        return res.json(product)
    }
}

module.exports=new ProductController()