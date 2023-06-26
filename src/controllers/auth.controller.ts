import {User} from "../schemas/user.schema";

class AuthController {
    static getFormLogin(req: any, res: any): any {
        res.render('auth/login')
    }

    static getFormRegister(req: any, res: any): any {
        res.render('auth/register')
    }

    static async register(req: any, res: any) {
        let { name, email, password, } = req.body;
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