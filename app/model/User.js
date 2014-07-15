var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    username: { type: String, unique: true }
});

userSchema.pre('save', function(next){
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(5, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) cb(err);
        cb(null, isMatch);
    })
};

module.exports = mongoose.model('User', userSchema);


