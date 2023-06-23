"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const register_controller_1 = require("../controllers/register.controller");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
exports.router = express_1.default.Router();
exports.router.get('/index.html', (req, res) => {
    res.render('index');
});
exports.router.get('/register.html', (req, res) => {
    res.render('register');
});
exports.router.post('/register.html', register_controller_1.Register.getRegister);
exports.router.get('/login.html', (req, res) => {
    res.render('login');
});
exports.router.post('/login.html', (req, res, next) => {
    auth_middleware_1.default.authenticate("local", (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.send("Wrong email or password");
        }
        req.login(user, () => {
            res.redirect('/index.html');
        });
    })(req, res, next);
});
//# sourceMappingURL=register.router.js.map