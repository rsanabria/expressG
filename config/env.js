var path = require('path'),
  roothPath = path.normalize(__dirname + '/../../');

module.exports = {
  dev: {
    db: {url: 'mongodb://localhost/mydb'},
    roothPath: roothPath,
    secret: 'SECRET',
    port: process.env.PORT || 8080
  }

};