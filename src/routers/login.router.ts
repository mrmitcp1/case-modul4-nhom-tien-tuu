import express from 'express';
import { Login } from '../controllers/login.controller';
export const loginRouter = express.Router();
loginRouter.get('/login', (req, res) => {
    res.render('login')
})
loginRouter.post('/login', Login.getLogin);
loginRouter.get('/', (req, res) => {
    res.render('index')
})