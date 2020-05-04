import {Router} from 'express';
import UserAuth from '../controllers/UserAuth';
import {createAuser} from '../validations/UserCreate'
const routes = new Router();
routes.post('/create',[createAuser],UserAuth.create)

export default routes;