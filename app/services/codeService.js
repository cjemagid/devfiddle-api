const Code = require('../models/code');
const Promise = require('bluebird'); 

var svc = module.exports = {};

svc.save = function(data) {
    if(data.id){ 
        return Code.update({id: data.id,app: data.app}, data); 
    } else {
        return Code.create(data);
    }
    
};

svc.get = function(params) {
    return Code.findOne(params);
}; 

