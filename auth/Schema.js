'use strict';
var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var AuthSchema = new Schema({
    email: String,
    pwhash: String,
    /*name: {
        type: String,
        required: 'User name is required'
    },*/
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

AuthSchema.methods.setPassword = async function(password) {
    console.log("Setting Password", password)
    let promise = new Promise((resolve, reject) => {
        bcrypt.hash(password,10000,(err,hash) => {
            if (err) {reject(err)};
            resolve(hash) 
        });  
    }).catch((err) => {throw err});
    this.pwhash = await promise
};

AuthSchema.methods.validatePassword = async function(password) {
    var pwash = this.pwhash
    var promise = new Promise(function(resolve, reject) {
        bcrypt.compare(password, pwash).then((res) => {
            resolve(res)
        });
    })
    return promise;
};

AuthSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

AuthSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};


module.exports = mongoose.model('Auth', AuthSchema);