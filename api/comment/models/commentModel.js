'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    CaseId: {
        type: Schema.Types.ObjectId,
        required: 'Comment must be attached to a Case'
    },
    comment: {
        type:String,
        required: 'Enter Comment Text'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    CommunicationAgent: {
        type: [{
            type: String,
            enum: ['Customer', 'Staff Member', '3rd Party']
        }],
        default: ['Active']
    }
});

module.exports = mongoose.model('Comment', UserSchema);