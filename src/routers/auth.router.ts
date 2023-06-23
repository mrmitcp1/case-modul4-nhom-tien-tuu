import express from "express";
import passport from "../middlewares/auth.middleware";
import AuthController from "../controllers/auth.controller";
const authRouter = express.Router();

authRouter.get('/login.html', AuthController.getFormLogin);
authRouter.post('/login.html', passport.authenticate('local', {
    successRedirect: '/index.html',
    failureRedirect: '/login.html'
}));
export default authRouter;
