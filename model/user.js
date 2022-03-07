var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    phone: {
        type: Number,
        required: true,


    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    }
}, {
    collection: 'User'
})


module.exports = mongoose.model('User', UserSchema);