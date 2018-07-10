/* global config */
var mongoose = require("mongoose"),
  env = process.env.NODE_ENV || "dev";
config = require("../config/env.js")[env];
//Conexión
let db = mongoose.createConnection(config.db.url, /* {auth: config.db.auth} */);

db.on("open",()=> {
     console.log("Conexión a MongoDB!");
})
db.on("error", ()=> {
    console.log("No se puedo conectar");
})

exports.db = db;