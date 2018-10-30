require('./auth/');
require('./config/passport');

const api = require('./api/').start();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const next = require('next');

const routes = require('./routes/')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
   .then(() => {
    
    //Start main server
    const server = express()
    server.use(bodyParser.urlencoded({extended: true}))
    server.use(bodyParser.json())


    server.use(routes);
    //Default router
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    var port = process.env.MAIN_PORT || 8080;
    server.listen(port,(err) => {
        if(err) throw err;
        console.log('Main web server started on: ' + port);
    })
    
}).then(() => {

}).catch((ex)=>{
    console.error(ex.stack);
    process.exit(1);
})

module.exports = app