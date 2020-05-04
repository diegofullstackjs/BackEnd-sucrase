
import UserModel from '../models/User'
class UserAuth {

    async create(req,res){
            const create = await UserModel.create(req.body);

             return res.status(200).json(create);
        
    }
}

export default new UserAuth