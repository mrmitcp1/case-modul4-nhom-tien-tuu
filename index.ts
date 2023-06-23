import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import livereload from "connect-livereload";
import passport from "passport";
import localRouter from "./src/routers/local.router";
import carRouter from "./src/routers/cars.router";
import {rentalRouters} from "./src/routers/rental.routers";

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
app.use('/adm',localRouter)
app.use(carRouter);

app.use("/car",rentalRouters);

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}/cars/list`);
});
