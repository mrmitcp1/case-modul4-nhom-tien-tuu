import passport from '../middlewares/auth.middleware';
export class Login {
    static async getLogin(req, res , next ) {
        await passport.authenticate("local", (err: any, user: any) => {
            if (err) {
                return next(err)
            };
            if (!user) {
                return res.redirect('/login')
            };
            req.login(user, () => {
                res.redirect('/')
            })
        })
          (req, res, next)

    }
}