import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import livereload from "connect-livereload";
import passport from "passport";
import localRouter from "./src/routers/local.router";
import carRouter from "./src/routers/cars.router";
import {rentalRouters} from "./src/routers/rental.routers";
import {logoutRouter} from "./src/routers/logout.router";
import {authRouter} from "./src/routers/auth.router";
import {adminRouter} from "./src/routers/admin.router";
import * as process from "process";

const PORT = process.env.PORT || 3333;
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
const DB_URL = "mongodb+srv://Viet:Anhlaai%40111@viet.ygv7f2b.mongodb.net/test";
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("DB connection error:", error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(express.static("./assets"));
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false},
    })
);
app.use(livereload());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('assets'));

app.use(authRouter);

app.use("/car", rentalRouters);
app.use(logoutRouter);
app.use('/adm', localRouter)
app.use(carRouter);
app.use(adminRouter);

app.use((req: any, res: any, next: any) => {
    if (req.isAuthenticated()) {
        res.locals.userLogin = req.user;
    }
    next();
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}/login`);
});
