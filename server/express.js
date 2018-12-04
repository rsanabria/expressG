const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const morgan = require('morgan')

module.exports = () => {
  /* Initialize express app */
  var app = express()

  /* Configuration */
  if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'))
  }
  /*  For serving static content */
  // app.use('/', express.static('./public'))

  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(methodOverride())
  /* app.route('/*')
  .get(function(req,res){
  res.sendFile('index.html', { root: './dist' }); */

  require('./main/main.routes')(app)
  return app
}
