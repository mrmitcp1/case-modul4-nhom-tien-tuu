import { User } from "../schemas/user.schema";

class UserController {
  static async displayUserPage(req: any, res: any) {
    if (req.user) {
      const user = req.user;
      res.render("userdetail", { user: user });
    } else {
      res.redirect("/index");
    }
  }

  static async displayUserEditPage(req: any, res: any) {
    if (req.user) {
      const user = req.user;
      const userInfo = await User.findOne({ _id: user.id });
      res.render("useredit", { user: user, userData: userInfo });
    } else {
      res.redirect("/index");
    }
  }

  static async updateUserInfo(req: any, res: any) {
    if (req.user) {
      const userId = req.user.id;
      const user = await User.findOne({ _id: userId });
      const data = {
        user_name: req.body.name,
        user_email: req.body.email,
        user_password: req.body.password,
      };
      await user.updateOne(data);
      res.redirect("/user");
    } else {
      res.redirect("/index");
    }
  }
}

export default UserController;
