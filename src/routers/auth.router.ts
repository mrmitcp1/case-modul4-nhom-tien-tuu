import passport from "../middlewares/auth.middleware";
import express from "express";
import AuthController from "../controllers/auth.controller";
import {MainController} from "../controllers/main.controller";
export const authRouter = express.Router();
authRouter.get('/login', AuthController.getFormLogin)
authRouter.get('/index',MainController.showHomePage)
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login'
}));
authRouter.get('/', (req, res) => {
    res.render('index')
});
authRouter.get('/register', AuthController.getFormRegister);
authRouter.post('/register', AuthController.register);
authRouter.post('/login', passport.authenticate('local', { session: true, failureRedirect: '/auth/login' }), MainController.showHomePage);
authRouter.get('/login/google', passport.authenticate('google', {scope: ['profile', 'email']}));
authRouter.get("/google/callback", passport.authenticate('google'), (req, res) => {
    res.redirect('/index');
});