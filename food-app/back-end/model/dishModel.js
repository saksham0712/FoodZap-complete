const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  srNo: {
    type: Number,
    required: true,
  },
  dishID: {
    type: String,
    required: true,
  },
  statusOfEntry: {
    type: String,
    required: true,
  },
  originOfDish: {
    type: Object,
    required: true,
  },
  typeOfDish: {
    type: String,
    requried: true,
  },
  milkBased: {
    type: Boolean,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  picture: {
    type: Object,
    required: true,
  },
  availabilityTimeOfTheDay: {
    type: String,
    required: true,
  },
  preparationTime: {
    type: String,
    required: true,
  },
  instantaneousAvailability: {
    type: Boolean,
    required: true,
  },
  availabilitySeasons: {
    type: Object,
    required: true,
  },
  sugarFree: {
    type: Boolean,
    required: true,
  },
  eggsUsed: {
    type: Boolean,
    required: false,
  },
  cookingMediumUsed: {
    type: Object,
    required: false,
  },
  cookingMediumAdjustable: {
    type: String,
    required: false,
  },
  levelOfCondiments: {
    type: String,
  },
  spiceLevel: {
    type: String,
  },
  spiceLevelAdjustible: {
    type: Boolean,
  },
  additionalAdjustibleAndImportantIngredientPresent: {
    type: String,
  },
  ingredient1Level: {
    type: String,
  },
  allergensPresent: {
    type: Boolean,
  },
  servingMethod: {
    type: String,
  },
  quantity: {
    type: String,
  },
  categoryOfDish: {
    type: Boolean,
  },
  variableServingSize: {
    type: String,
  },
  servingSizeOption: {
    type: String,
  },
  priceOfBasicDish: {
    type: String,
  },
  condimentOption: {
    type: String,
  },
  spiceOption: {
    type: String,
  },
  cookingMethodOption: {
    type: String,
  },
  ingredient1option: {
    type: String,
  },
});


const dishModel = mongoose.model('dishes', dishSchema);
module.exports = dishModel;