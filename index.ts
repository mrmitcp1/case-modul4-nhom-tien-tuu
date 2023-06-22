import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import livereload from "connect-livereload";
import passport from "passport";
import { Car } from "./src/schemas/car.schema";
import { Local } from "./src/schemas/local.schema";
import { User } from "./src/schemas/user.schema";


const PORT = 3333;
const app = express();
app.set('view engine','ejs');
app.set('views', './src/views');

const DB_URL = 'mongodb://127.0.0.1:27017/case_modul4'
mongoose.connect(DB_URL)
    .then(() => {
        
        

        // let newCar = new Car({
        //     car_brand: 'a',
        //     car_model: 'a',
        //     car_year: '123',
        //     car_color: '12',
        //     car_rentalPrice: 12,
        //     car_availability: 'av'
        // })
        // newCar.save();
        
        console.log('DB Connected!')
    })

    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(livereload());
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {

    console.log("App running on port: " + PORT)

})