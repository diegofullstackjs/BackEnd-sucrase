import * as Yup from 'yup';

const createAuser = async (req,res,next) => {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().required().min(5).max(20),
        email: Yup.string().email().required(),
        type: Yup.mixed().oneOf(['Trabalhador','Empresa']).required()
    });

  try {
    await schema.validate(req.body);
    return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
}

export {
    createAuser
}