'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  env = process.env.NODE_ENV || 'dev',
  config = require('./env.js')[env],
  db = require('./db.js');

module.exports = function () {

  //Initialize express app
  var app = express();

  //Configuration
  if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
  }
  /*Para la pagina web*/
  //app.use('/', express.static('./public'));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  //jwt
  require('../routes/mainRoutes.js')(app);
  return app;

};