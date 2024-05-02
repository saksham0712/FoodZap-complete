const mongoose = require("mongoose");
const express = require("express");
const dishModel = require("../model/dishModel");

// fetching all the dishes
const fetchDishes = async (req, res) => {
  try {
    const data = await dishModel.find();
    res.status(200).json({ message: "all dishes found", "dishes": data });
  } catch (error) {
    res.status(500).json({ message: "all dishes not found", "error": error });
  }
};

// fetching a perticular dish
const fetchADish = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await dishModel.find({ srNo: id });
    res.status(200).json({ message: "dish fetched", "dish": data });
  } catch (error) {
    res.status(500).json({ message: "dish not fetched", "error": error });
  }
};

// creating a dish
let i = 1;
const createDish = async (req, res) => {
  const newDish = {
    srNo: i,
    dishID: "dishID"+i,
    statusOfEntry: req.body.statuOfEntry,
    originOfDish: req.body.originOfDish,
    typeOfDish: req.body.typeOfDish,
    milkBased: req.body.milkBased,
    meal: req.body.meal,
    picture: req.body.picture,
    availabilityTimeOfTheDay: req.body.availabilityTimeOfTheDay,
    preparationTime: req.body.preparationTime,
    instantaneousAvailability: req.body.instantaneousAvailability,
    availabilitySeasons: req.body.availabilitySeasons,
    sugarFree: req.body.sugarFree,
  };
  if (req.body.eggsUsed !== undefined) {
    newDish["eggsUsed"] = req.body.eggsUsed;
  }
  if (req.body.cookingMediumUsed !== undefined) {
    newDish["cookingMediumUsed"] = req.body.cookingMediumUsed;
  }
  if (req.body.cookingMediumAdjustable !== undefined) {
    newDish["cookingMediumAdjustable"] = req.body.cookingMediumAdjustable;
  }
  if (req.body.levelOfCondiments !== undefined) {
    newDish["levelOfCondiments"] = req.body.levelOfCondiments;
  }
  if (req.body.spiceLevel !== undefined) {
    newDish["spiceLevel"] = req.body.spiceLevel;
  }
  if (req.body.spiceLevelAdjustible !== undefined) {
    newDish["spiceLevelAdjustible"] = req.body.spiceLevelAdjustible;
  }
  if (
    req.body.additionalAdjustibleAndImportantIngredientPresent !== undefined
  ) {
    newDish["additionalAdjustibleAndImportantIngredientPresent"] =
      req.body.additionalAdjustibleAndImportantIngredientPresent;
  }
  if (req.body.ingredient1Level !== undefined) {
    newDish["ingredient1Level"] = req.body.ingredient1Level;
  }
  if (req.body.allergensPresent !== undefined) {
    newDish["allergensPresent"] = req.body.allergensPresent;
  }
  if (req.body.servingMethod !== undefined) {
    newDish["servingMethod"] = req.body.servingMethod;
  }
  if (req.body.quantity !== undefined) {
    newDish["quantity"] = req.body.quantity;
  }
  if (req.body.categoryOfDish !== undefined) {
    newDish["categoryOfDish"] = req.body.categoryOfDish;
  }
  if (req.body.variableServingSize !== undefined) {
    newDish["variableServingSize"] = req.body.variableServingSize;
  }
  if (req.body.servingSizeOption !== undefined) {
    newDish["servingSizeOption"] = req.body.servingSizeOption;
  }
  if (req.body.priceOfBasicDish !== undefined) {
    newDish["priceOfBasicDish"] = req.body.priceOfBasicDish;
  }
  if (req.body.condimentOption !== undefined) {
    newDish["condimentOption"] = req.body.condimentOption;
  }
  if (req.body.spiceOption !== undefined) {
    newDish["spiceOption"] = req.body.spiceOption;
  }
  if (req.body.cookingMethodOption !== undefined) {
    newDish["cookingMethodOption"] = req.body.cookingMethodOption;
  }
  if (req.body.ingredient1option !== undefined) {
    newDish["ingredient1option"] = req.body.ingredient1option;
  }
  i++;
  try {
    const data = await dishModel.create(newDish);
    res.status(200).json({ message: "dish created successfully", "dish": data });
  } catch (error) {
    res.status(500).json({ message: "dish not created", "error": error });
    console.error(error);
    
  }
};

// delete a dish
const deletedish = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await dishModel.deleteOne({ srNo: id });
    res.status(200).json({ message: "dish deleted successfully", "dish": data });
  } catch (error) {
    res.status(500).json({ message: "dish not deleted", "error": error });
  }
};

//delete all dishes
const deleteAllDish = async (req, res) => {
  try {
    await dishModel.deleteMany();
    res.status(200).json({ message: "All dish deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "dishes not deleted", "error": error });
  }
};

// update dish
const updateDish = async (req, res) => {
    const id = req.params.ID;
  const updated = {};
  if (req.body.statusOfEntry !== undefined) {
    updated["statuOfEntry"] = req.body.statuOfEntry;
  }
  if (req.body.originOfDish !== undefined) {
    updated["originOfDish"] = req.body.originOfDish;
  }
  if (req.body.typeOfDish !== undefined) {
    updated["typeOfDish"] = req.body.typeOfDish;
  }
  if (req.body.milkBased !== undefined) {
    updated["milkBased"] = req.body.milkBased;
  }
  if (req.body.meal !== undefined) {
    updated["meal"] = req.body.meal;
  }
  if (req.body.picture !== undefined) {
    updated["picture"] = req.body.picture;
  }
  if (req.body.availabilityTimeOfTheDay !== undefined) {
    updated["availabilityTimeOfTheDay"] = req.body.availabilityTimeOfTheDay;
  }
  if (req.body.preparationTime !== undefined) {
    updated["preparationTime"] = req.body.preparationTime;
  }
  if (req.body.instantaneousAvailability !== undefined) {
    updated["instantaneousAvailability"] = req.body.instantaneousAvailability;
  }
  if (req.body.availabilitySeasons !== undefined) {
    updated["availabilitySeasons"] = req.body.availabilitySeasons;
  }
  if (req.body.sugarFree !== undefined) {
    updated["sugarFree"] = req.body.sugarFree;
  }
  if (req.body.eggsUsed !== undefined) {
    updated["eggsUsed"] = req.body.eggsUsed;
  }
  if (req.body.cookingMediumUsed !== undefined) {
    updated["cookingMediumUsed"] = req.body.cookingMediumUsed;
  }
  if (req.body.cookingMediumAdjustable !== undefined) {
    updated["cookingMediumAdjustable"] = req.body.cookingMediumAdjustable;
  }
  if (req.body.levelOfCondiments !== undefined) {
    updated["levelOfCondiments"] = req.body.levelOfCondiments;
  }
  if (req.body.spiceLevel !== undefined) {
    updated["spiceLevel"] = req.body.spiceLevel;
  }
  if (req.body.spiceLevelAdjustible !== undefined) {
    updated["spiceLevelAdjustible"] = req.body.spiceLevelAdjustible;
  }
  if (
    req.body.additionalAdjustibleAndImportantIngredientPresent !== undefined
  ) {
    updated["additionalAdjustibleAndImportantIngredientPresent"] =
      req.body.additionalAdjustibleAndImportantIngredientPresent;
  }
  if (req.body.ingredient1Level !== undefined) {
    updated["ingredient1Level"] = req.body.ingredient1Level;
  }
  if (req.body.allergensPresent !== undefined) {
    updated["allergensPresent"] = req.body.allergensPresent;
  }
  if (req.body.servingMethod !== undefined) {
    updated["servingMethod"] = req.body.servingMethod;
  }
  if (req.body.quantity !== undefined) {
    updated["quantity"] = req.body.quantity;
  }
  if (req.body.categoryOfDish !== undefined) {
    updated["categoryOfDish"] = req.body.categoryOfDish;
  }
  if (req.body.variableServingSize !== undefined) {
    updated["variableServingSize"] = req.body.variableServingSize;
  }
  if (req.body.servingSizeOption !== undefined) {
    updated["servingSizeOption"] = req.body.servingSizeOption;
  }
  if (req.body.priceOfBasicDish !== undefined) {
    updated["priceOfBasicDish"] = req.body.priceOfBasicDish;
  }
  if (req.body.condimentOption !== undefined) {
    updated["condimentOption"] = req.body.condimentOption;
  }
  if (req.body.spiceOption !== undefined) {
    updated["spiceOption"] = req.body.spiceOption;
  }
  if (req.body.cookingMethodOption !== undefined) {
    updated["cookingMethodOption"] = req.body.cookingMethodOption;
  }
  if (req.body.ingredient1option !== undefined) {
    updated["ingredient1option"] = req.body.ingredient1option;
  }
try {
    const data = await dishModel.updateOne({srNo: id}, {$set: updated})
    res.status(200).json({"message": "dish updated successfully", "data": data})
} catch (error) {
    res.status(500).json({"message": "dish not updated", "error": error})
    }
};

module.exports = {fetchDishes, fetchADish, createDish, deletedish, deleteAllDish, updateDish} 