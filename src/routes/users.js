import {Router} from 'express';
import UserAuth from '../controllers/UserAuth'
const routes = new Router();
routes.post('/create',UserAuth.create)

export default routes;