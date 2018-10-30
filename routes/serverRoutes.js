
module.exports = (() => {
    'use strict';
    var router = require('express').Router();
    
    router.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    router.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { title: req.params.id } 
        res.render(req, res, actualPage, queryParams)
    })

    router.get('/c/:casenumber', (req, res) => {
        console.log("hit Casenumber url -> ", req.params.casenumber)
        const actualPage = '/case_item'
        const queryParams = { casenumber: req.params.casenumber } 
        res.render(req, res, actualPage, queryParams)
    })

    router.get('/c', (req, res) => {
        const actualPage = '/case' 
        res.render(req, res, actualPage)
    })

    router.get('/u/:userid', (req, res) => {
        const actualPage = '/user'
        const queryParams = { title: req.params.userid } 
        res.render(req, res, actualPage, queryParams)
    })
    
    return router;
})();