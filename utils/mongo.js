const mongoose = require('mongoose');

//Set up mongoose connection
var mongoDB = 'mongodb://fch:1qaz!QAZ@ds159993.mlab.com:59993/iot_fch';
mongoose.connect(mongoDB, { useNewUrlParser: true }, err => { if (err) { console.error(err); } else { console.log('connected'); } });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
