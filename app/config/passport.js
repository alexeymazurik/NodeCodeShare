var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({ usernameField: 'username' }, function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
        if (!user) return done(null, false, { message: 'User ' + username + ' not found'});
        user.comparePassword(password, function(err, isMatch) {
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid email or password.' });
            }
        });
    });
}));