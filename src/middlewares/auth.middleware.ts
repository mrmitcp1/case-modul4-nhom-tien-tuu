import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../schemas/user.schema";
import GoogleStrategy from 'passport-google-oauth20';

passport.use(new Strategy(async function verify(username:string, password: string, cb) {
    const user = await User.findOne({user_email :username});
    if (!user) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    if (user.user_password !== password) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    return cb(null, user);
}))

passport.serializeUser((user: any, cb)  => {
    process.nextTick(() => {
        cb(null, { id: user._id, username: user.user_email,role:user.user_role });
    });
});

passport.deserializeUser((user: any, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});
passport.use(new GoogleStrategy({
        clientID: "545270950172-2pan4f2k2tlnh3iq877lm3mu3epqg92m.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3333/auth/google/callback",
        passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
        try {
            let existingUser = await User.findOne({ 'google.id': profile.id });
            if (existingUser) {
                return done(null, existingUser);
            }
            const newUser = new User({
                google: {
                    id: profile.id,
                },
                username: profile.emails[0].value,
                password: null
            });
            await newUser.save();
            return done(null, newUser);
        } catch (error) {
            return done(null, false)
        }
    }
));
export default passport;

