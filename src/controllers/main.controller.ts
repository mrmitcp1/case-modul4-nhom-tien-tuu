export class MainController {
  static showHomePage(req: any, res: any) {
    let role;
    let user;
    if (req.user) {
      user = req.user;
      role = req.user.role;
    }
    res.render("index", { userState: role, userGreet: user });
  }
}
