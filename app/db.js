const config = require('../config');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.db);


module.exports = mongoose; 