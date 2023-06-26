"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
class Login {
    static async getLogin(req, res, next) {
        await auth_middleware_1.default.authenticate("local", (err, user) => {
            if (err) {
                return next(err);
            }
            ;
            if (!user) {
                return res.redirect('/login');
            }
            ;
            req.login(user, () => {
                res.redirect('/');
            });
        })(req, res, next);
    }
}
exports.Login = Login;
//# sourceMappingURL=login.controller.js.map