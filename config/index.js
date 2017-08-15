

var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://test:test@ds038319.mlab.com:38319/node-todo';
    }
}