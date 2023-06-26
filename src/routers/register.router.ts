import express from 'express';
import { Register } from '../controllers/register.controller';
export const registeRrouter = express.Router();

registeRrouter.get('/register', (req, res) => {
    res.render('register')
});
registeRrouter.post('/register', Register.getRegister);


