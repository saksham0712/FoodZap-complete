const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  SerialNo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  statusOfEntry: {
    type: String,
    required: true,
  },
  typeOfFood: {
    type: String,
    required: true,
  },
  cuisines: {
    type: String,
    required: false,
  },
  displayPic: {
    type: Boolean,
    required: true,
  },
  pictureGallery: {
    type: Boolean,
    required: false,
  },
  tableBookServiceStatus: {
    type: Boolean,
    required: false,
  },
  typeOfService: {
    type: String,
    required: true,
  },
  sittingArrangement: {
    type: String,
    required: true,
  },
  operationalStatus: {
    type: Boolean,
    required: true,
  },
  operationalTimmings: {
    type: String,
    required: true,
  },
  selfService: {
    type: Boolean,
    required: true,
  },
  lastOrderTime: {
    type: String,
    required: true,
  },
  minimumOrderToDineIn: {
    type: Number,
    required: false,
  },
  kitchenConditions: {
    type: String,
    required: false,
  },
  homeDelivery: {
    type: Boolean,
    required: true,
  },
  deliveryRadius: {
    type: String,
    required: false,
  },
  timeRequired: {
    type: String,
    required: false,
  },
  costOfService: {
    type: Number,
    required: false,
  },
  negativeList: {
    type: Boolean,
    required: false,
  },
  regularDishes: {
    type: String,
    required: true,
  },
  specialDishes: {
    type: String,
    required: false,
  },
  madeOnOrderDishes: {
    type: String,
    required: false,
  },
  paymentOnCounter: {
    type: Boolean,
    required: true,
  },
  paymentFromSystem: {
    type: Boolean,
    required: true,
  },
  liveOrder: {
    type: Number,
    required: false,
  },
  pastSuccessfulOrders: {
    type: Number,
    required: false,
  },
  pastUnsuccessfulOrders: {
    type: Number,
    required: false,
  },
  wideDiscountNature: {
    type: Boolean,
    required: false,
  },
  linkedDishes: {
    type: Boolean,
    required: false,
  },
  quantityMultiplier: {
    type: Boolean,
    required: false,
  },
  dishedWithSpecialDiscount: {
    type: String,
    required: false,
  },

  dishedWiseSpecialDiscount: {
    type: String,
    required: false,
  },
  specialDiscountNature: {
    type: String,
    required: false,
  },
  dishedWithLinkedDishes: {
    type: String,
    required: false,
  },
  consent: {
    type: String,
    required: false,
  },
  systemOverRide: {
    type: String,
    required: false,
  },
  systemValue: {
    type: String,
    required: false,
  },
  systemOverRide: {
    type: String,
    required: false,
  },
  discountValue: {
    type: String,
    required: false,
  },
  eventFacilityAvailaibility: {
    type: Boolean,
    required: true,
  },
  allowedNumberOfParticipant: {
    type: Number,
    required: false,
  },
  negativeListOftypeOfEvent: {
    type: String,
    required: false,
  },
  scheduledOffDays: {
    type: String,
    required: false,
  },
  unscheduledOffDays: {
    type: String,
    required: false,
  },
  outsideFoodAllowed: {
    type: Boolean,
    required: true,
  },
  descriptionOfOutsideFoodAllowed: {
    type: String,
    required: false,
  },
  alcholConsumption: {
    type: Boolean,
    required: true,
  },
  descriptionOfAlcholConsumption: {
    type: String,
    required: false,
  },
  privateSpace: {
    type: Boolean,
    required: true,
  },
  descriptionOfFacilityOfPrivateSpace: {
    type: String,
    required: false,
  },
  customDecorations: {
    type: Boolean,
    required: true,
  },
  descriptionOfFacilityOfCustomDecorations: {
    type: String,
    required: false,
  },
  liveArchestra: {
    type: Boolean,
    required: true,
  },
  descriptionOfFacilityOfLiveArchestra: {
    type: String,
    required: false,
  },
  dj: {
    type: Boolean,
    required: true,
  },
  descriptionOfFacilityOfDj: {
    type: String,
    required: false,
  },
});

const Model = mongoose.model("Resturants", restaurantSchema);
module.exports = Model;
