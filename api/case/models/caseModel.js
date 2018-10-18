'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaseSchema = new Schema({
  CaseNumber: {
    type: mongoose.Schema.Types.ObjectId, index:true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Cases', CaseSchema);