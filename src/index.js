import dotenv from 'dotenv/config'
import Mongo from './config/mongoose'
import express from 'express'
import cors from 'cors'
class Server {

    constructor() {
        this.express = express()
        this.port = process.env.PORT || 3000
        this.rotas()
        this.middlewares()
        this.mongoose = new Mongo();
    }

    middlewares(){
       this.express.use(cors())
    }
    rotas(){
        this.express.use('/',(req,res) => {
            return res.status(200).json({msg: "ok"})
        })
    }
    run(){
        this.express.listen(this.port, ()=> {
            console.log("Server is running")
            this.mongoose.run();
        })
        
    }
}

export default new Server();