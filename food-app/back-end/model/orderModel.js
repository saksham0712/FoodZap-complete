const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    srNo: {
        type: Number,
        required: true
    },
    typeOfOrder: {
        type: String,
        required: true
    },
    foodOrder: {
        type: Object,
        required: true
    },
    whoOrdered: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    }
})


const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
