const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../routes/registerModels");

passport.use(
    new GoogleStrategy({
            clientID: "1026668141658 - 62755 opru6r0jb063cvfvqc5lg7dsing.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/google/callback",
            passReqToCallback: true,
        },
        function(request, accessToken, refreshToken, profile, done) {
            User.findOrCreate({
                    name: profile.displayName,
                    email: profile.email,
                    provider: "GOOGLE",
                },
                function(err, user) {
                    return done(err, user);
                }
            );
        }
    )
);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});