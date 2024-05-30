// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// defining here a schema

const modelSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },

  Name: {
    type: String,
    required: true,
  },

  phoneNum: {
    type: Number,
    required: true,
    unique: true,
  },

  collage: {
    type: String,
    required: false,
  },

  branch: {
    type: String,
    required: false,
  },

  DOB: {
    type: String,
    required: true,
  },

  typeOfUser: {
    type: String,
    required: false,
  },

  batch: {
    type: Number,
    required: false,
  },

  profilePicture: {
    type: String,
    required: false,
  },
  payment: {
    type: Boolean,
    required: false,
  },
  Password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  orderRelated: {
    type: String,
    required: false,
  },
  ralatedToPayments: {
    type: String,
    required: false,
  },
  relatedToGroups: {
    type: String,
    required: false,
  },
  userInNegativeList: {
    type: String,
    required: false,
  },
  CanteensOrRestaurantInNegativeList: {
    type: String,
    required: false,
  },
  PrepaidOrderLimit: {
    type: String,
    required: false,
  },
  UnsecuredOrderLimit: {
    type: String,
    required: false,
  },
  WalletBalance: {
    type: Number,
    required: false,
  },
  ProfileStatus: {
    type: String,
    required: false,
  },
  PastOrderHistory: {
    type: Object,
    required: false,
  },
  TransactionHistory: {
    type: Object,
    required: false,
  },
  CurrentOrders: {
    type: Object,
    required: false,
  },
  PastEvents: {
    type: Object,
    required: false,
  },
  ReceivedMsg: {
    type: Object,
    required: false,
  },
  SentMsg: {
    type: Object,
    required: false,
  },
  DraftMessages: {
    type: Object,
    required: false,
  },
  SystemNotifications: {
    type: Object,
    required: false,
  }
});

// compile model for the schema
const model = mongoose.model("Users", modelSchema);
module.exports = model;
