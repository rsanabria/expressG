/* Database Connections */
const mongoose = require('mongoose')
const env = process.env.NODE_ENV || 'dev'
const config = require('../config/env.js')[env]

/* Connection */
let db = mongoose.createConnection(config.db.url)

db.on('open', () => {
  console.log('Conexión a MongoDB!')
})
db.on('error', () => {
  console.log('No se puedo conectar')
})

exports.db = db
