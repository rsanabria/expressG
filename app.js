const env = process.env.NODE_ENV || 'dev'
const config = require('./server/config/env')[env]

var app = require('./server/express')()

app.listen(config.port)

process.on('unhandledRejection', error => {
  console.log(error.message)
})

console.log('App esuchando en el puerto' + config.port)
