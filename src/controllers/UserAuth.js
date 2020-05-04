import * as Yup from 'yup'

class UserAuth {

    async create(req,res){
        let schema = Yup.object().shape({
            name: Yup.string().required("Campo nome deve ser preenchido"),
            email: Yup.string().email().required("Email deve ser Valido"),
            password: Yup.string().trim()
            .max(20,"Sua senha ultrapassa 20 caracters")
            .min(3,"Senha deve ter minimo de 3 caracters")
            .required("Campo senha é obrigatorio")

        })

         await schema.validate(req.body).then(() => {
             return res.status(200).json(req.body)
         }).catch((e) => {
            return res.status(200).json(e)
         });
        
    }
}

export default new UserAuth