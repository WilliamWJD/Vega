const Product = require('../models/Product')
const yup = require('yup')

class ProductController{
    async index(req,res){
        const products=await Product.find()
        return res.json(products)
    }

    async show(req,res){
        const { product_id } = req.params
        const product=await Product.findById({_id:product_id})
        if(!product){
            return res.status(401).json({error:"Product not found..."})
        }
        return res.json(product)
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

    async update(req,res){
        const { product_id } = req.params

        const Schema=yup.object().shape({
            title:yup.string().required(),
            description:yup.string().required(),
            url:yup.string().required()
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(401).json({error:"Error on validate schema..."})
        }

        const product=await Product.findById({_id:product_id})
        if(!product){
            return res.status(401).json({error:"Product not found..."})
        }

        await product.update(req.body)

        return res.json(product)
    }

    async delete(req,res){
        const { product_id } = req.params
        
        const product=await Product.findById({_id:product_id})
        if(!product){
            return res.status(401).json({error:"Product not found..."})
        }

        await product.delete()
        return res.json({message:"Product exclused successful..."})
    }
}

module.exports=new ProductController()