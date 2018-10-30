'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('Client');

//Get list of all users
exports.get_users = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

//Create new User
exports.post_user = function(req, res) {
  var new_User = new User(req.body);
  new_User.save(function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

//Get single user
exports.get_user = function(req, res) {
  User.findById(req.params.UserId, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

//Update a single user
exports.put_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};
//Delete a user
exports.delete_user = function(req, res) {
  User.remove({
    _id: req.params.UserId
  }, function(err, User) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};