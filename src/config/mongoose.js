import mongoose from 'mongoose'

class Mongoose {

    constructor(){
        this.mongurl = process.env.MONGOURL
        this.run()
    }
    run(){
        mongoose.connect(this.mongurl,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then((data) => {
            console.log("Banco de dados conectado")
        })
    }
}

export default Mongoose;