var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    hash_password: {
        type: String,
        required: true,
    },
});

userSchema
    .virtual('id')
    .get(function () {
        return this._id;
    });

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('User', userSchema);
