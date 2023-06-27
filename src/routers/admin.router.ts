import express from 'express';
import permissionMiddleware from '../middlewares/permission.middleware'
import {MainController} from "../controllers/main.controller";
import AuthController from "../controllers/auth.controller";
export const adminRouter = express.Router();
adminRouter.use(permissionMiddleware);
adminRouter.get('/admin/home', (req, res) => {
    let username = MainController.getInfoUser(req,res)
    res.render('admin/dashboard', {username})
});
adminRouter.get('/admin/listuser',AuthController.getInfoUser);
adminRouter.get('/admin/deleteuser/:id',AuthController.deleteUser)

