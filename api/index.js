module.exports = function(){
    'use strict';
    const mongoose = require('mongoose');
    const express = require('express');
    const Apis = require('./__start__');
    const bodyParser = require('body-parser');
    const app = express()
    const port = process.env.API_PORT || 8081;

    
    mongoose.Promise = global.Promise;
    console.log(process.env.MDBASE);
    mongoose.connect(process.env.MDBASE);
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var routes = require('./routes/routes'); //importing route
    routes(app);
    
    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });
    console.log('todo list RESTful API server started on: ' + port);

    
    app.listen(port);

    
}();