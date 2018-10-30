require('dotenv').config()
var app = require('../server.js')
var assert = require('assert');
const mongoose = require("mongoose");
const fetch = require('isomorphic-unfetch')

describe('Authentication', function() {
  describe('User Login', function() {
    before(function(done) {
        this.timeout(10000);
        setTimeout(() => {done()}, 5000)
    });
    it('Should return a JSON object with a User and Token field', function(done) {
        this.timeout(10000);
        var se = PerformAuthFetchRequest(
            `http://localhost:8080/auth/login`,
            {"content-type":"application/json"},
            JSON.stringify({"user":{"email":"bhiggin2@geelongcity.vic.gov.au","password":"swu6duawid"}}),
            (se) => {
                if(assert.ok(se.hasOwnProperty("user"))){
                    assert.ok(se.user.hasOwnProperty("token"))
                };
                done()
            })
    });
  });
});

function PerformAuthFetchRequest(_url, _headers, _body, done) {
    fetch(_url, {
        method:"POST",
        headers: _headers,
        body: _body,
        credentials: "same-origin"
    }).then((response)=>{
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((se)=>{
        done(se)
    });

}