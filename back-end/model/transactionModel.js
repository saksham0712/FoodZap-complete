const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    srNo: {
        type: Number,
        required: true
    },
    transactionID: {
        type: String,
        required: true
    },
    originator: {
        type: String,
        required: true
    },
    natureOfTransaction: {
        type: String,
        required: true
    },
    typeOfTransaction: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    refundability: {
        type: Boolean,
        required: true
    }
});

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;