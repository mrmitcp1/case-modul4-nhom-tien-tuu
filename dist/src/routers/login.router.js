"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_controller_1 = require("../controllers/login.controller");
exports.loginRouter = express_1.default.Router();
exports.loginRouter.get('/login', (req, res) => {
    res.render('login');
});
exports.loginRouter.post('/login', login_controller_1.Login.getLogin);
exports.loginRouter.get('/', (req, res) => {
    res.render('index');
});
//# sourceMappingURL=login.router.js.map