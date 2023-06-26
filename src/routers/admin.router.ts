import express from 'express';
import permissionMiddleware from '../middlewares/permission.middleware'
export const adminRouter = express.Router();
adminRouter.use(permissionMiddleware);
adminRouter.get('/admin', (req, res) => {
    res.render('index')
});
