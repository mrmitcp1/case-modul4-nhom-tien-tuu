class UserController {
  static async displayUserPage(req: any, res: any) {
    if (req.user) {
      const user = req.user;
      res.render("userdetail", { user: user });
    } else {
      res.redirect("/index");
    }
  }
}

export default UserController;
