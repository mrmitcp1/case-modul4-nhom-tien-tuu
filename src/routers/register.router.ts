import express from 'express';
import { Register } from '../controllers/register.controller';
import passport from '../middlewares/auth.middleware';
export const router = express.Router();

router.get('/index.html', (req, res) => {
    res.render('index')
});
router.get('/register.html', (req, res) => {
    res.render('register')
});
router.post('/register.html', Register.getRegister);
router.get('/login.html', (req, res) => {
    res.render('login')
})
router.post('/login.html', (req, res, next) => {
 passport.authenticate("local", (err:any, user:any) => {
 if (err) {
 return next(err)
 }

 if (!user) {
 return res.send("Wrong email or password")
 }

 req.login(user, () => {
 res.redirect('/index.html')
 })

 })(req, res, next)

})


