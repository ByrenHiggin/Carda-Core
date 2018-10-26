'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'User name is required'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    addresses: [{
        street: String,
        city: String,
        cc: String,
        ActiveAddress: Boolean,
        Lat: Schema.Types.Decimal128,
        Lon: Schema.Types.Decimal128
    }],
    status: {
        type: [{
            type: String,
            enum: ['Active', 'Archived', 'Deceased']
        }],
        default: ['Active']
    }
});

module.exports = mongoose.model('User', UserSchema);