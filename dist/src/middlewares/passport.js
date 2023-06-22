"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const user_schema_1 = require("../schemas/user.schema");
const passport_local_1 = require("passport-local");
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.use('local', new passport_local_1.Strategy(async (username, password, done) => {
    const user = await user_schema_1.User.findOne({ user_email: username });
    if (!user) {
        return done(null, false);
    }
    else {
        if (user.user_password === password) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
}));
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map