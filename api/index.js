const mongoose = require('mongoose');
const express = require('express');
const Apis = require('./__start__');
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 8081;

exports.start = () => {
    const app = express()
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MDBASE);

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    var routes = require('./routes/routes'); //importing route
    routes(app);

    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });
    console.log('RESTful API server started on: ' + port);
    
    app.listen(port);
};;