var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var groupSchema = new Schema({
    group_name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    hash_password: {
        type: String,
        required: true,
    },
    thingspeak_id: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        default: []
    }
});

groupSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('Group', groupSchema);
