import {User} from "../schemas/user.schema";

class AuthController {
    static getFormLogin(req: any, res: any): any {
        res.render('auth/login')
    }

    static getFormRegister(req: any, res: any): any {
        res.render('auth/register', { alertUsernameExisted: false })
    }

    static async register(req: any, res: any) {
        let { name, email, password } = req.body;
        const userNameExists = await User.findOne({ user_email :email  });
        if (userNameExists)  return res.render('auth/register', { alertUsernameExisted: true });
        let user = new User({
            user_name: name,
            user_email: email,
            user_password: password,
            user_role: ''
        });
        await user.save();
        res.redirect('/login')
    };
};
export default AuthController;