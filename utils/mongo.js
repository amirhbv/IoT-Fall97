const mongoose = require('mongoose');

//Set up mongoose connection
var mongoDB = 'mongodb://localhost:27017/db';
mongoose.connect(mongoDB, { useNewUrlParser: true }, err => { if (err) { console.error(err); } else { console.log('connected'); } });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
