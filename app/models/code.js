const mdb = require('../db');
const shortid = require('shortid');

const Schema = mdb.Schema;


var schema = new mdb.Schema( {
    "id" : {type: String, default: shortid.generate}, 
    "app" : {type:String},
    "directory" : {type:String},
    "insert_time": { type: Date, default: Date.now },
    "data": Schema.Types.Mixed, 
    "fork_of" : Schema.Types.ObjectId
    
});


var model = mdb.model('codes',schema);

module.exports = model;