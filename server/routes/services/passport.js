const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys')

/**
 * call the passport module and initialize google strategy from passport
 */
 passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access', accessToken)
        console.log('refresh', refreshToken)
        console.log('profile', profile)
        console.log('done', done)
        }
    )
);
