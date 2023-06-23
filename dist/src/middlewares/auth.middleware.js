"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const user_schema_1 = require("../schemas/user.schema");
passport_1.default.use(new passport_local_1.Strategy(async function verify(username, password, cb) {
    const user = await user_schema_1.User.findOne({ user_email: username });
    if (!user) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    if (user.user_password !== password) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    return cb(null, user);
}));
passport_1.default.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { id: user._id, username: user.user_email });
    });
});
passport_1.default.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});
exports.default = passport_1.default;
//# sourceMappingURL=auth.middleware.js.map