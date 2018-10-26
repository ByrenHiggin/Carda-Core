'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('Comment');

//Get list of all users
exports.get_comments = function(req, res) {
  User.find({CaseId: req.params.CaseId}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

//Create new User
exports.post_comment = function(req, res) {
  var new_User = new User(req.body);
  new_User.CaseId = req.params.CaseId;
  new_User.save(function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

//Get single user
exports.get_comment = function(req, res) {
  User.find({
      CaseId: req.params.CaseId, 
      _id: req.params.id
  }, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

//Update a single user
exports.put_comment = function(req, res) {
  User.findOneAndUpdate({
      CaseId: req.params.CaseId, 
      _id: req.params.CommentId
  }, req.body, {new: true}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};
//Delete a user
exports.delete_comment = function(req, res) {
  User.remove({
      CaseId: req.params.CaseId,
      _id: req.params.CommentId
  }, function(err, User) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};