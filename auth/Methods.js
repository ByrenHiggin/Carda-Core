'use strict';
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./Flags');
const Users = mongoose.model('Auth');



exports.new_login = (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password).then(()=>{
      return finalUser.save()
          .then(() => res.json({ user: finalUser.toAuthJSON() }));      
  });
}

exports.login = (req, res, next) => {
    const { body: { user } } = req;
    if(!user.email) {
        return res.status(422).json({
          errors: {
            email: 'is required',
          },
        });
    }
    if(!user.password) {
        return res.status(422).json({
          errors: {
            password: 'is required',
          },
        });
    }
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {
          return next(err);
        }
        if(passportUser) {
          const user = passportUser;
          user.token = passportUser.generateJWT();
          return res.json({ user: user.toAuthJSON() });
        }
        return res.status(400).info;
    })(req, res, next);
};
                               

exports.current_user = (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }
      return res.json({ user: user.toAuthJSON() });
    });
  }