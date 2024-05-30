const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    address: {
        type:String,
        required: false
    }
})

const guestModel = mongoose.model('guest', guestSchema);

module.exports = guestModel;