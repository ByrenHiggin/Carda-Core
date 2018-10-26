'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaseSchema = new Schema({
  CaseNumber: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'resolved', 'archived']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Cases', CaseSchema);