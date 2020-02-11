const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

require('dotenv/config')

class App{
    constructor(){
        this.server=express()
        this.database()
        this.middleware()
        this.routes()
    }

    middleware(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }

    database(){
        mongoose.connect(`${process.env.MONGO_URL}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    }
}

module.exports=new App().server