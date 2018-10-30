const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Auth');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) => {
      (async function() {
          return await user.validatePassword(password).then((res)=>{
             if(!user || !res) {
                return  done(null, false, { errors: { 'email or password': 'is invalid' } });
              }
              return done(null, user);
          })
      })();
    }).catch(done);
}));