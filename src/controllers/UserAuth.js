import {sign} from 'jsonwebtoken'
import UserModel from '../models/User'
class UserAuth {

    async create(req,res){
            const create = await UserModel.create(req.body);

             return res.status(200).json(create);
        
    }
    async auth(req,res){
        const {email,password} = req.body;
        try{
        await UserModel.findOne({email:email}).then((data) => {
            if(data){
                if(data.password !== password){
                    return res.status(200).json({error: "Senha invalida"})
                }
                const token = sign({data},process.env.KEY,{ expiresIn: '30d'})
                return res.status(200).json({data, token: token})
            }
            return res.status(200).json({error: "Usuario nao encontrado"})
        })
    }catch(e) {
        console.warn(e)
        return res.status(500).json({ error: "Ocorreu um erro no servidior"})
    }

    }
}

export default new UserAuth