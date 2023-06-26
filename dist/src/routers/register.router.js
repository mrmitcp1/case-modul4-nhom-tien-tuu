"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registeRrouter = void 0;
const express_1 = __importDefault(require("express"));
const register_controller_1 = require("../controllers/register.controller");
exports.registeRrouter = express_1.default.Router();
exports.registeRrouter.get('/register', (req, res) => {
    res.render('register');
});
exports.registeRrouter.post('/register', register_controller_1.Register.getRegister);
//# sourceMappingURL=register.router.js.map