"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    user_name: String,
    user_email: String,
    user_password: String,
    user_phone: String,
    user_address: String,
    user_role: String,
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.schema.js.map