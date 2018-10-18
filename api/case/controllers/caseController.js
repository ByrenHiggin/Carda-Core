'use strict';
var mongoose = require('mongoose'),
Case = mongoose.model('Cases');

exports.get_cases = function(req, res) {
  Case.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.put_case = function(req, res) {
    var new_case = new Case(req.body);
    new_case.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
    });
};

exports.get_case = function(req, res) {
    if(req.params.CaseID === "")
        {
            Case.findOne({CaseNumber: req.params.CaseId}, function(err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        } else {
            Case.findOne({_id: req.params.CaseId}, function(err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        }
        
};

exports.post_case = function(req, res) {
  Case.findOneAndUpdate({_id: req.params.CaseId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_case = function(req, res) {
  Case.remove({
    _id: req.params.CaseId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Case successfully deleted' });
  });
};