/* global config */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'dev'
config = require('./config/env.js')[env];
//Conexión
var db = mongoose.connect(config.db, function(err) {
    if (err) {
        console.log('\x1b[31m', 'No se pudo conectar a MongoDB!\x1b[+0m');
        console.log(err);
    } else { console.log("Conexión a MongoDB!"); }
});