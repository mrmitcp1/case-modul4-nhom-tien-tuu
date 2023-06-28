import {User} from "../schemas/user.schema";

class AdminController {
    static async displayAdminEditPage(req: any, res: any) {
        if (req.user) {
            const user = req.user;
            const adminInfo = await User.findOne({ _id: user.id });
            res.render("admin/adminEdit", { user: user, userData: adminInfo });
        } else {
            res.redirect("/index");
        }
    }

    static async updateAdminInfo(req: any, res: any) {
        if (req.user) {
            const userId = req.user.id;
            const user = await User.findOne({ _id: userId });
            const data = {
                user_name: req.body.name,
                user_email: req.body.email,
                user_password: req.body.password,
            };
            await user.updateOne(data);
            res.redirect("/admin/admininfo");
        } else {
            res.redirect("/index");
        }
    }
}

export default AdminController