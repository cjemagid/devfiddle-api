const merge = require('deepmerge');

var defaults = {
    db : 'mongodb://devfiddleuser:devpwd@ds059496.mlab.com:59496/devfiddle'
};

config_options = {
    development : {
        db : 'mongodb://localhost/devfiddle'
    }
};


var config = merge(defaults,
    config_options[process.env.NODE_ENV] || {}
);

module.exports = config; 

