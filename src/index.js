import dotenv from 'dotenv/config'
import http from 'http'
import Mongo from './config/mongoose'
import IndexRoutes from './routes/index'
import UsersRoutes from './routes/users'
import express from 'express'
import bodyParser from 'body-parser'
import socket from 'socket.io'
import cors from 'cors'
class Server {

    constructor() {
        this.express = express()
        this.server = http.Server(this.express)
        this.port = process.env.PORT || 3000
        this.middlewares()
        this.rotas()
        this.mongoose = new Mongo();
        this.connectedUsers = {};
    }
    socket(){
        this.io = socket(this.server)
        this.io.on('connection',(socket) => {
           const {userid} = socket.handshake.query;
           this.connectedUsers[userid] = socket.id;
           socket.on('disconnect',() => {
                delete this.connectedUsers[userid];
           });
        });
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
        this.server.listen(this.port)
    }
}

export default new Server();