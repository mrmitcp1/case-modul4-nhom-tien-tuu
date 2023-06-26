import express from "express";
import passport from "../middlewares/auth.middleware";
import AuthController from "../controllers/auth.controller";
const authRouter = express.Router();

authRouter.get("/login", AuthController.getFormLogin);
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/login",
  })
);
export default authRouter;
