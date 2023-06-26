import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import livereload from "connect-livereload";
import passport from "passport";
import { registeRrouter } from "./src/routers/register.router";
import authRouter from "./src/routers/auth.router";
import localRouter from "./src/routers/local.router";
import carRouter from "./src/routers/cars.router";
import {rentalRouters} from "./src/routers/rental.routers";
import { logoutRouter } from "./src/routers/logout.router";
import { adminRouter } from "./src/routers/admin.router";
import { loginRouter } from "./src/routers/login.router";
import permissionMiddleware from "./src/middlewares/permission.middleware";

const PORT = 3333;
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
const DB_URL = "mongodb://127.0.0.1:27017/case_modul4";
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("DB connection error:", error.message));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(express.static("./assets"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(livereload());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('assets'));
// app.use(adminRouter);
app.use(registeRrouter);

app.use(loginRouter)
app.use(authRouter);
app.use(logoutRouter);
// app.use(permissionMiddleware);
// app.use((req: any, res: any, next: any) => {
//         if (req.isAuthenticated()) {
//                 res.locals.userLogin = req.user
//                 next();
//         } else {
//                 res.redirect('/login')
//         }
// })
app.use('/adm',localRouter)
app.use(carRouter);

app.use("/car",rentalRouters);

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}/login`);
});
