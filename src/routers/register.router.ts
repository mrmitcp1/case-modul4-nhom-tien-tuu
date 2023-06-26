import express from "express";
import { Register } from "../controllers/register.controller";
import passport from "../middlewares/auth.middleware";
export const router = express.Router();

router.get("/index", (req, res) => {
  res.render("index");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", Register.getRegister);
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err: any, user: any) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send("Wrong email or password");
    }

    req.login(user, () => {
      res.redirect("/index");
    });
  })(req, res, next);
});
