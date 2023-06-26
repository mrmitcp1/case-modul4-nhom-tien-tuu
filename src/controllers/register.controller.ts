import { User } from "../schemas/user.schema";
export class Register{
    static async getRegister(req:any, res:any) {
        let { name, email, password ,} = req.body;
        let user = new User({
            user_name: name,
            user_email: email,
            user_password: password,
            user_role : 'user'
        });
        if (user) {
            await user.save();
        }
        
        res.redirect('/login')
    }
}