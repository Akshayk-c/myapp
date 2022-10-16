const JwtStrategy = require('passport-jwt').Strategy,
 ExtractJwt = require('passport-jwt').ExtractJwt;
const Userdb = require('./model/model')
const passport=require('passport')


var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'key';
passport.use('user',new JwtStrategy(opts, function(jwt_payload, done) {
    
    Userdb.findOne({_id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
passport.use('admin',new JwtStrategy(opts, function(jwt_payload, done) {
    
    Userdb.findOne({_id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            if(user.admin) return done(null, user);
            else{
                console.log("Not admin")
                return done(null, false);} 
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports