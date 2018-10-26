const api = require('./api/');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
   .then(() => {
    
    //Start main server
    const server = express()
    server.use(bodyParser.urlencoded({extended: true}))
    server.use(bodyParser.json())

    
    server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    
    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { title: req.params.id } 
        app.render(req, res, actualPage, queryParams)
    })
    
    server.get('/c/:casenumber', (req, res) => {
        console.log("hit Casenumber url -> ", req.params.casenumber)
        const actualPage = '/case_item'
        const queryParams = { casenumber: req.params.casenumber } 
        app.render(req, res, actualPage, queryParams)
    })
    
    server.get('/c', (req, res) => {
        const actualPage = '/case' 
        app.render(req, res, actualPage)
    })
    
    server.get('/u/:userid', (req, res) => {
        const actualPage = '/user'
        const queryParams = { title: req.params.userid } 
        app.render(req, res, actualPage, queryParams)
    })
    
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    var port = process.env.MAIN_PORT || 8080;
    server.listen(port,(err) => {
        if(err) throw err;
        console.log('Main web server started on: ' + port);
    })

    
    
}).then(() => {
    //Start Api Server
    api.start();
    
}).catch((ex)=>{
    console.error(ex.stack);
    process.exit(1);
    
})
