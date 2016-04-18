'use strict';
var express = require('express');
var main = require('../controllers/mainCtrl');
//
var mainRouter = express.Router();
module.exports = function (app){

	mainRouter
        .get('/holaMundo',main.holaMundo);


    app.use('/', mainRouter);
};
