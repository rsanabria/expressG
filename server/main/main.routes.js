'use strict';
var express = require('express');
var main = require('./main.ctrl');
//
var mainRouter = express.Router();
module.exports = function(app) {

    mainRouter
        .get('/', main.helloWorld);


    app.use('/', mainRouter);
};