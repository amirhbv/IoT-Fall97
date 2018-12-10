var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema
    .virtual('id')
    .get(function () {
        return this._id;
    });

module.exports = mongoose.model('User', userSchema);
