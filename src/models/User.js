import {Schema,model} from 'mongoose'

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ["Trabalhador","Empresa"],
        required: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps:true})


export default model('user',User) 