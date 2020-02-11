const Product = require('../models/Product')
const yup = require('yup')

class ProductController{
    async index(req,res){
        const products=await Product.find()
        return res.json(products)
    }

    async store(req,res){
        const Schema=yup.object().shape({
            title:yup.string().required(),
            description:yup.string().required(),
            url:yup.string().required()
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(401).json({error:"Error on validate schema..."})
        }

        const { title, description, url } = req.body
        const product=await Product.create({title,description, url})
        return res.json(product)
    }
}

module.exports=new ProductController()