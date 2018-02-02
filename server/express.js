'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    env = process.env.NODE_ENV || 'dev',
    config = require('./config/env.js')[env],
    db = require('./db.js');

module.exports = function() {

    //Initialize express app
    var app = express();

    //Configuration
    if (process.env.NODE_ENV === 'dev') {
        app.use(morgan('dev'));
    }
    /*For serving static content*/

    //app.use('/', express.static('./public'));
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    /* FOR ANGULAR APPS */

    /* app.route('/*')
    .get(function(req,res){
    res.sendFile('index.html', { root: './dist' }); */

    require('./main/main.routes')(app);
    return app;

};