var path        = require('path'),
    roothPath   = path.normalize(__dirname + '/../../');

module.exports = {
    dev : {
        db : 'mongodb://localhost/mydb',
        roothPath : roothPath,
        secret : 'sivemo14031992',
        port: process.env.PORT || 8080
    }

};