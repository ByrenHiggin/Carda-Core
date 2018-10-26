'use strict';
var mongoose = require('mongoose'),
Case = mongoose.model('Cases');

exports.get_cases = function(req, res) {
  Case.find({}, function(err, Case) {
    if (err)
      res.send(err);
    res.json(Case);
  });
};

exports.post_case = function(req, res) {
    var new_Case = new Case(req.body);
    new_Case.caseNumber = "CA-" + Math.random().toString(36).substr(2, 9) + "-" + new Date().getTime();
    new_Case.save(function(err, Case) {
    if (err)
      res.send(err);
    res.json(Case);
    });
};

exports.get_case = function(req, res) {
    Case.findOne({CaseNumber: req.params.casenumber}, function(err, Case) {
        if (err)
            res.send(err);
        res.json(Case);
    });
};

exports.put_case = function(req, res) {
  Case.findOneAndUpdate({CaseNumber: req.params.casenumber}, req.body, {new: true}, function(err, Case) {
    if (err)
      res.send(err);
    res.json(Case);
  });
};

exports.delete_case = function(req, res) {
  Case.remove({
    CaseNumber: req.params.casenumber
  }, function(err, Case) {
    if (err)
      res.send(err);
    res.json({ message: 'Case successfully deleted' });
  });
};