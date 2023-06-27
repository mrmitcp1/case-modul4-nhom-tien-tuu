import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../schemas/user.schema";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new Strategy(async function verify(username: string, password: string, cb) {
    const user = await User.findOne({ user_email: username });
    if (!user) {
      return cb(null, false, { message: "Incorrect username or password." });
    }
    if (user.user_password !== password) {
      return cb(null, false, { message: "Incorrect username or password." });
    }
    return cb(null, user);
  })
);

passport.serializeUser((user: any, cb) => {
  process.nextTick(() => {
    cb(null, { id: user._id, username: user.user_email, role: user.user_role });
  });
});

passport.deserializeUser((user: any, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "545270950172-6usa7v6pijc5s26tpq2qanpiiif0bski.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3333/google/callback",
      passReqToCallback: true,
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
                user_name: profile.emails[0].value,
                user_password: null,
                user_role : 'user'
            });
            await newUser.save();
            return done(null, newUser);
        } catch (error) {
            return done(null, false)
      try {
        let existingUser = await User.findOne({ "google.id": profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const newUser = new User({
          google: {
            id: profile.id,
          },
          user_name: profile.emails[0].value,
          user_password: null,
          user_role: "user",
        });
        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        return done(null, false);
      }
    }
  )
);
export default passport;
