const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  srNo: {
    type: Number,
    required: true,
  },
  messageID: {
    type: String,
    required: true,
  },
  originator: {
    type: String,
    required: true,
  },
  natureOfMessage: {
    type: String,
    required: true,
  },
  typeOfMessage: {
    type: String,
    required: true,
  },
  reciever: {
    type: String,
    required: true,
  },
  timeOfOrigin: {
    type: String,
    required: false,
  },
  timeDelivery: {
    type: String,
    required: false,
  },
  sendingDay: {
    type: String,
    required: false,
  },
  recievingDay: {
    type: String,
    required: false,
  },
  messageText: {
    type: String,
    required: true,
  },
  attachedFiles: {
    type: Object,
    required: false,
  },
  enclosedLink: {
    type: Object,
    required: false,
  },
});

const messModel = mongoose.model("Messages", messageSchema);
module.exports = messModel;
