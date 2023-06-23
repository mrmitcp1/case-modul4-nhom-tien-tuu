"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const user_schema_1 = require("../schemas/user.schema");
class Register {
    static async getRegister(req, res) {
        let { name, email, password } = req.body;
        let user = new user_schema_1.User({
            user_name: name,
            user_email: email,
            user_password: password
        });
        if (user) {
            await user.save();
        }
        res.redirect('/login.html');
    }
}
exports.Register = Register;
//# sourceMappingURL=register.controller.js.map