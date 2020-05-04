import dotenv from 'dotenv/config'
import Mongo from './config/mongoose'
import IndexRoutes from './routes/index'
import UsersRoutes from './routes/users'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
class Server {

    constructor() {
        this.express = express()
        this.port = process.env.PORT || 3000
        this.middlewares()
        this.rotas()
        this.mongoose = new Mongo();
    }

    middlewares(){
        this.express.use(express.json())
       this.express.use(cors())
       this.express.use(bodyParser.json())
       this.express.use(bodyParser.urlencoded({extended:true}))
    }
    rotas(){
        this.express.use('/',IndexRoutes)
        this.express.use('/users',UsersRoutes)
    }
    run(){
        this.express.listen(this.port, ()=> {
            console.log("Server is running")
            this.mongoose.run();
        })
        
    }
}

export default new Server();