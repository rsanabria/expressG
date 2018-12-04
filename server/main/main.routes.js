const express = require('express')
const main = require('./main.ctrl')
//
var mainRouter = express.Router()
module.exports = (app) => {
  mainRouter
    .get('/', main.helloWorld)

  app.use('/', mainRouter)
}
