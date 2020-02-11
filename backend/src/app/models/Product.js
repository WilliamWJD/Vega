const mongoose = require('mongoose')

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

module.exports=mongoose.model('Product', ProductSchema)