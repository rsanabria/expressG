/* global config */
var mongoose = require("mongoose"),
  env = process.env.NODE_ENV || "dev";
config = require("./config/env.js")[env];
//Conexión
var db = new Promise((_,reject) => {
  mongoose.connect(config.db, function(err) {
    if (err) {
      reject(new Error("Can't connect to Mongo"))
    } else {
      console.log("Connected to Mongo");
    }
  });
});
