"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const connect_livereload_1 = __importDefault(require("connect-livereload"));
const passport_1 = __importDefault(require("passport"));
const car_schema_1 = require("./src/schemas/car.schema");
const local_schema_1 = require("./src/schemas/local.schema");
const user_schema_1 = require("./src/schemas/user.schema");
const PORT = 3333;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
const DB_URL = 'mongodb://127.0.0.1:27017/case_modul4';
mongoose_1.default.connect(DB_URL)
    .then(() => {
    console.log('DB Connected!');
})
    .catch(error => console.log('DB connection error:', error.message));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use((0, connect_livereload_1.default)());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get('/createlocal', (req, res) => {
    res.render('createlocal');
});
app.post('/createlocal', async (req, res) => {
    let newLocal = new local_schema_1.Local({
        local_city: req.body.local_city,
        address: req.body.address
    });
    await newLocal.save();
    res.redirect('/createcar');
});
app.get('/createcar', async (req, res) => {
    let listLocal = await local_schema_1.Local.find();
    res.render('createcar', { locals: listLocal });
});
app.post('/createcar', async (req, res) => {
    let { locals, car_brand, car_model, car_year, car_color, car_rentalPrice, car_availability } = req.body;
    let newCar = new car_schema_1.Car({
        locals: locals,
        car_brand: car_brand,
        car_model: car_model,
        car_year: car_year,
        car_color: car_color,
        car_rentalPrice: car_rentalPrice,
        car_availability: car_availability
    });
    await newCar.save();
    res.redirect('/createcar');
});
app.get('/createuser', (req, res) => {
    res.render('createuser');
});
app.post('/createuser', async (req, res) => {
    let { user_name, user_email, user_password, user_phone, user_address, user_role } = req.body;
    let user = new user_schema_1.User({
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
        user_phone: user_phone,
        user_address: user_address,
        user_role: user_role
    });
    await user.save();
    res.redirect('/createuser');
});
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map