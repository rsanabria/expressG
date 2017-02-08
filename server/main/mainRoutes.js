'use strict';
var express = require('express');
var main = require('./mainCtrl');
//
var mainRouter = express.Router();
module.exports = function(app) {

    mainRouter
        .get('/holaMundo', main.holaMundo);


    app.use('/', mainRouter);
};