'use strict';
var express = require('express');
var recordatorio = require('../controllers/recordatorioCtrl');
//
var mainRouter = express.Router();
module.exports = function (app){

	mainRouter
        .get('/holaMundo',recordatorio.holaMundo);

    
    app.use('/', mainRouter);
};