const Code = require('../models/code');
const Promise = require('bluebird'); 

var svc = module.exports = {};

svc.save = function(data) {
    return Code.create(data);
};

svc.get = function(params) {
    return Code.findOne(params);
}; 

