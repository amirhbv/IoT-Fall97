var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nodemcuSchema = new Schema({
    dataName: {
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: Number,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
        trim: true
    }
});

nodemcuSchema
    .virtual('id')
    .get(function () {
        return this._id;
    });

module.exports = mongoose.model('Nodemcu', nodemcuSchema);
