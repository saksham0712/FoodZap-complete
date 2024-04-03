const express = require("express");
const Model = require("../model/restaurantModel");

// fetching all the restaurants
const fetchAllRestaurants = async (req, res) => {
  try {
    const data = await Model.find();
    res
      .status(200)
      .json({ messege: "All users are fetched successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messege: "sorry data not fetched" });
  }
};

// creating a new restaurants
const addRestaurants = async (req, res) => {
  const newRestaurant = {
    SerialNo: req.body.name.slice(0, 4) + req.body.phone.slice(-4),
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    statusOfEntry: req.body.statusOfEntry,
    typeOfFood: req.body.typeOfFood,
    typeOfService: req.body.typeOfService,
    sittingArrangement: req.body.sittingArrangement,
    operationalStatus: req.body.operationalStatus,
    operationalTimmings: req.body.operationalTimmings,
    selfService: req.body.selfService,
    lastOrderTime: req.body.lastOrderTime,
    outSidersAllowed: req.body.outSidersAllowed,
    homeDelivery: req.body.homeDelivery,
    deliveryReady: req.body.deliveryReady,
    regularDishes: req.body.regularDishes,
    paymentOnCounter: req.body.paymentOnCounter,
    paymentFromSystem: req.body.paymentFromSystem,
    eventFacilityAvailaibility: req.body.eventFacilityAvailaibility,
    outsideFoodAllowed: req.body.outsideFoodAllowed,
    alcholConsumption: req.body.alcholConsumption,
    privateSpace: req.body.privateSpace,
    customDecorations: req.body.customDecorations,
    liveArchestra: req.body.liveArchestra,
    displayPic: req.body.displayPic,
    dj: req.body.dj,
  };
  if (req.body.cuisines !== undefined) {
    newRestaurant["cuisines"] = req.body.cuisines;
  }
  if (req.body.pictureGallery !== undefined) {
    newRestaurant["pictureGallery"] = req.body.pictureGallery;
  }
  if (req.body.tableBookServiceStatus !== undefined) {
    newRestaurant["tableBookServiceStatus"] = req.body.tableBookServiceStatus;
  }
  if (req.body.minimumOrderToDineIn !== undefined) {
    newRestaurant["minimumOrderToDineIn"] = req.body.minimumOrderToDineIn;
  }
  if (req.body.kitchenConditions !== undefined) {
    newRestaurant["kitchenConditions"] = req.body.kitchenConditions;
  }
  if (req.body.timeRequired !== undefined) {
    newRestaurant["timeRequired"] = req.body.timeRequired;
  }
  if (req.body.costOfService !== undefined) {
    newRestaurant["costOfService"] = req.body.costOfService;
  }
  if (req.body.negativeList !== undefined) {
    newRestaurant["negativeList"] = req.body.negativeList;
  }
  if (req.body.specialDishes !== undefined) {
    newRestaurant["specialDishes"] = req.body.specialDishes;
  }
  if (req.body.madeOnOrderDishes !== undefined) {
    newRestaurant["madeOnOrderDishes"] = req.body.madeOnOrderDishes;
  }
  if (req.body.liveOrder !== undefined) {
    newRestaurant["liveOrder"] = req.body.liveOrder;
  }
  if (req.body.pastSuccessfulOrders !== undefined) {
    newRestaurant["pastSuccessfulOrders"] = req.body.pastSuccessfulOrders;
  }
  if (req.body.pastUnsuccessfulOrders !== undefined) {
    newRestaurant["pastUnsuccessfulOrders"] = req.body.pastUnsuccessfulOrders;
  }
  if (req.body.wideDiscountNature !== undefined) {
    newRestaurant["wideDiscountNature"] = req.body.wideDiscountNature;
  }
  if (req.body.linkedDishes !== undefined) {
    newRestaurant["linkedDishes"] = req.body.linkedDishes;
  }
  if (req.body.quantityMultiplier !== undefined) {
    newRestaurant["quantityMultiplier"] = req.body.quantityMultiplier;
  }
  if (req.body.linkedDishes !== undefined) {
    newRestaurant["dishedWithSpecialDiscount"] =
      req.body.dishedWithSpecialDiscount;
  }
  if (req.body.specialDiscountNature !== undefined) {
    newRestaurant["specialDiscountNature"] = req.body.specialDiscountNature;
  }
  if (req.body.dishedWithLinkedDishes !== undefined) {
    newRestaurant["dishedWithLinkedDishes"] = req.body.dishedWithLinkedDishes;
  }
  if (req.body.consent !== undefined) {
    newRestaurant["consent"] = req.body.consent;
  }
  if (req.body.systemOverRide !== undefined) {
    newRestaurant["systemOverRide"] = req.body.systemOverRide;
  }
  if (req.body.systemValue !== undefined) {
    newRestaurant["systemValue"] = req.body.systemValue;
  }
  if (req.body.systemOverRide !== undefined) {
    newRestaurant["systemOverRide"] = req.body.systemOverRide;
  }
  if (req.body.discountValue !== undefined) {
    newRestaurant["discountValue"] = req.body.discountValue;
  }
  if (req.body.allowedNumberOfParticipant !== undefined) {
    newRestaurant["allowedNumberOfParticipant"] =
      req.body.allowedNumberOfParticipant;
  }
  if (req.body.negativeListOftypeOfEvent !== undefined) {
    newRestaurant["negativeListOftypeOfEvent"] =
      req.body.negativeListOftypeOfEvent;
  }
  if (req.body.scheduledOffDays !== undefined) {
    newRestaurant["scheduledOffDays"] = req.body.scheduledOffDays;
  }
  if (req.body.unscheduledOffDays !== undefined) {
    newRestaurant["unscheduledOffDays"] = req.body.unscheduledOffDays;
  }
  if (req.body.descriptionOfOutsideFoodAllowed !== undefined) {
    newRestaurant["descriptionOfOutsideFoodAllowed"] =
      req.body.descriptionOfOutsideFoodAllowed;
  }
  if (req.body.descriptionOfAlcholConsumption !== undefined) {
    newRestaurant["descriptionOfAlcholConsumption"] =
      req.body.descriptionOfAlcholConsumption;
  }
  if (req.body.descriptionOfFacilityOfPrivateSpace !== undefined) {
    newRestaurant["descriptionOfFacilityOfPrivateSpace"] =
      req.body.descriptionOfFacilityOfPrivateSpace;
  }
  if (req.body.descriptionOfFacilityOfCustomDecorations !== undefined) {
    newRestaurant["descriptionOfFacilityOfCustomDecorations"] =
      req.body.descriptionOfFacilityOfCustomDecorations;
  }
  if (req.body.descriptionOfFacilityOfLiveArchestra !== undefined) {
    newRestaurant["descriptionOfFacilityOfLiveArchestra"] =
      req.body.descriptionOfFacilityOfLiveArchestra;
  }
  if (req.body.descriptionOfFacilityOfDj !== undefined) {
    newRestaurant["descriptionOfFacilityOfDj"] =
      req.body.descriptionOfFacilityOfDj;
  }
  try {
    await Model.create(newRestaurant);
    res.status(200).json({
      messsege:
        "new restaurant is added in the first try please save you unique serialNumber",
      newRestaurant,
    });
  } catch (error) {
    console.log(error);
    if (
      error["keyPattern"] !== undefined &&
      error["keyPattern"]["phone"] == 1
    ) {
      res.status(500).json({
        messege: "phone number is already registered",
        error: error,
      });
    } else if (
      error["keyPattern"] !== undefined &&
      error["keyPattern"]["serialNo"] == 1
    ) {
      newUser["serialNo"] += "s";
      try {
        await Model.create(newRestaurant);
        res
          .status(200)
          .json({ messege: "new user is added successfully 2", newRestaurant });
      } catch (error) {
        res.status(500).json({
          messege: "serial number is making error please try again",
          error: error,
        });
      }
    } else if (
      error["keyPattern"] !== undefined &&
      error["keyPattern"]["email"] == 1
    ) {
      res.status(500).json({ messege: "email already exists" });
    } else {
      res.status(500).json({
        messege:
          "user not registered. please try again and fill all the field carefully",
      });
    }
  }
};

// deleting  a perticular restaurants

const deleteOneRestaurants = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await Model.deleteOne({ SerialNo: id });
    res
      .status(200)
      .json({ messege: "restaurant deleted successfully", serialNo: id });
  } catch (error) {
    res.status(500).json({ messege: "user not deleted", error });
  }
};

// delete all the restaurants

const deleteAllRestaurants = async (req, res) => {
  try {
    Model.deleteMany({});
    res.status({ messege: "all restaurants deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ messege: "all user not deleted successfully", error: error });
  }
};

// fetch one restaus

const fetchaRestaurant = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = Model.find({ SerialNo: id });
    res
      .status(200)
      .json({ messege: "Restro found successfully", results: data });
  } catch (error) {}
};

// update restautant user

const updateRestaurant = async (req, res) => {
  const id = req.params.ID;
  const newRestro = {};
  if (req.body.name !== undefined) {
    newRestro["name"] = req.body.name;
  }
  if (req.body.phone !== undefined) {
    newRestro["phone"] = req.body.phone;
  }
  if (req.body.email !== undefined) {
    newRestro["email"] = req.body.email;
  }
  if (req.body.address !== undefined) {
    newRestro["address"] = req.body.address;
  }
  if (req.body.statusOfEntry !== undefined) {
    newRestro["statusOfEntry"] = req.body.statusOfEntry;
  }
  if (req.body.typeOfFood !== undefined) {
    newRestro["typeOfFood"] = req.body.typeOfFood;
  }
  if (req.body.typeOfService !== undefined) {
    newRestro["typeOfService"] = req.body.typeOfService;
  }
  if (req.body.sittingArrangement !== undefined) {
    newRestro["sittingArrangement"] = req.body.sittingArrangement;
  }
  if (req.body.operationalStatus !== undefined) {
    newRestro["operationalStatus"] = req.body.operationalStatus;
  }
  if (req.body.sittingArrangement !== undefined) {
    newRestro["sittingArrangement"] = req.body.sittingArrangement;
  }
  if (req.body.operationalTimmings !== undefined) {
    newRestro["operationalTimmings"] = req.body.operationalTimmings;
  }
  if (req.body.selfService !== undefined) {
    newRestro["selfService"] = req.body.selfService;
  }
  if (req.body.lastOrderTime !== undefined) {
    newRestro["lastOrderTime"] = req.body.lastOrderTime;
  }
  if (req.body.outSidersAllowed !== undefined) {
    newRestro["outSidersAllowed"] = req.body.outSidersAllowed;
  }
  if (req.body.homeDelivery !== undefined) {
    newRestro["homeDelivery"] = req.body.homeDelivery;
  }
  if (req.body.deliveryReady !== undefined) {
    newRestro["deliveryReady"] = req.body.deliveryReady;
  }
  if (req.body.regularDishes !== undefined) {
    newRestro["regularDishes"] = req.body.regularDishes;
  }
  if (req.body.paymentOnCounter !== undefined) {
    newRestro["paymentOnCounter"] = req.body.paymentOnCounter;
  }
  if (req.body.paymentFromSystem !== undefined) {
    newRestro["paymentFromSystem"] = req.body.paymentFromSystem;
  }

  if (req.body.eventFacilityAvailaibility !== undefined) {
    newRestro["eventFacilityAvailaibility"] =
      req.body.eventFacilityAvailaibility;
  }
  if (req.body.outsideFoodAllowed !== undefined) {
    newRestro["outsideFoodAllowed"] = req.body.outsideFoodAllowed;
  }
  if (req.body.alcholConsumption !== undefined) {
    newRestro["alcholConsumption"] = req.body.alcholConsumption;
  }
  if (req.body.privateSpace !== undefined) {
    newRestro["privateSpace"] = req.body.privateSpace;
  }
  if (req.body.liveArchestra !== undefined) {
    newRestro["liveArchestra"] = req.body.liveArchestra;
  }
  if (req.body.displayPic !== undefined) {
    newRestro["displayPic"] = req.body.displayPic;
  }
  if (req.body.dj !== undefined) {
    newRestro["dj"] = req.body.dj;
  }

  if (req.body.cuisines !== undefined) {
    newRestaurant["cuisines"] = req.body.cuisines;
  }
  if (req.body.pictureGallery !== undefined) {
    newRestaurant["pictureGallery"] = req.body.pictureGallery;
  }
  if (req.body.tableBookServiceStatus !== undefined) {
    newRestaurant["tableBookServiceStatus"] = req.body.tableBookServiceStatus;
  }
  if (req.body.minimumOrderToDineIn !== undefined) {
    newRestaurant["minimumOrderToDineIn"] = req.body.minimumOrderToDineIn;
  }
  if (req.body.kitchenConditions !== undefined) {
    newRestaurant["kitchenConditions"] = req.body.kitchenConditions;
  }
  if (req.body.timeRequired !== undefined) {
    newRestaurant["timeRequired"] = req.body.timeRequired;
  }
  if (req.body.costOfService !== undefined) {
    newRestaurant["costOfService"] = req.body.costOfService;
  }
  if (req.body.negativeList !== undefined) {
    newRestaurant["negativeList"] = req.body.negativeList;
  }
  if (req.body.specialDishes !== undefined) {
    newRestaurant["specialDishes"] = req.body.specialDishes;
  }
  if (req.body.madeOnOrderDishes !== undefined) {
    newRestaurant["madeOnOrderDishes"] = req.body.madeOnOrderDishes;
  }
  if (req.body.liveOrder !== undefined) {
    newRestaurant["liveOrder"] = req.body.liveOrder;
  }
  if (req.body.pastSuccessfulOrders !== undefined) {
    newRestaurant["pastSuccessfulOrders"] = req.body.pastSuccessfulOrders;
  }
  if (req.body.pastUnsuccessfulOrders !== undefined) {
    newRestaurant["pastUnsuccessfulOrders"] = req.body.pastUnsuccessfulOrders;
  }
  if (req.body.wideDiscountNature !== undefined) {
    newRestaurant["wideDiscountNature"] = req.body.wideDiscountNature;
  }
  if (req.body.linkedDishes !== undefined) {
    newRestaurant["linkedDishes"] = req.body.linkedDishes;
  }
  if (req.body.quantityMultiplier !== undefined) {
    newRestaurant["quantityMultiplier"] = req.body.quantityMultiplier;
  }
  if (req.body.linkedDishes !== undefined) {
    newRestaurant["dishedWithSpecialDiscount"] =
      req.body.dishedWithSpecialDiscount;
  }
  if (req.body.specialDiscountNature !== undefined) {
    newRestaurant["specialDiscountNature"] = req.body.specialDiscountNature;
  }
  if (req.body.dishedWithLinkedDishes !== undefined) {
    newRestaurant["dishedWithLinkedDishes"] = req.body.dishedWithLinkedDishes;
  }
  if (req.body.consent !== undefined) {
    newRestaurant["consent"] = req.body.consent;
  }
  if (req.body.systemOverRide !== undefined) {
    newRestaurant["systemOverRide"] = req.body.systemOverRide;
  }
  if (req.body.systemValue !== undefined) {
    newRestaurant["systemValue"] = req.body.systemValue;
  }
  if (req.body.systemOverRide !== undefined) {
    newRestaurant["systemOverRide"] = req.body.systemOverRide;
  }
  if (req.body.discountValue !== undefined) {
    newRestaurant["discountValue"] = req.body.discountValue;
  }
  if (req.body.allowedNumberOfParticipant !== undefined) {
    newRestaurant["allowedNumberOfParticipant"] =
      req.body.allowedNumberOfParticipant;
  }
  if (req.body.negativeListOftypeOfEvent !== undefined) {
    newRestaurant["negativeListOftypeOfEvent"] =
      req.body.negativeListOftypeOfEvent;
  }
  if (req.body.scheduledOffDays !== undefined) {
    newRestaurant["scheduledOffDays"] = req.body.scheduledOffDays;
  }
  if (req.body.unscheduledOffDays !== undefined) {
    newRestaurant["unscheduledOffDays"] = req.body.unscheduledOffDays;
  }
  if (req.body.descriptionOfOutsideFoodAllowed !== undefined) {
    newRestaurant["descriptionOfOutsideFoodAllowed"] =
      req.body.descriptionOfOutsideFoodAllowed;
  }
  if (req.body.descriptionOfAlcholConsumption !== undefined) {
    newRestaurant["descriptionOfAlcholConsumption"] =
      req.body.descriptionOfAlcholConsumption;
  }
  if (req.body.descriptionOfFacilityOfPrivateSpace !== undefined) {
    newRestaurant["descriptionOfFacilityOfPrivateSpace"] =
      req.body.descriptionOfFacilityOfPrivateSpace;
  }
  if (req.body.descriptionOfFacilityOfCustomDecorations !== undefined) {
    newRestaurant["descriptionOfFacilityOfCustomDecorations"] =
      req.body.descriptionOfFacilityOfCustomDecorations;
  }
  if (req.body.descriptionOfFacilityOfLiveArchestra !== undefined) {
    newRestaurant["descriptionOfFacilityOfLiveArchestra"] =
      req.body.descriptionOfFacilityOfLiveArchestra;
  }
  if (req.body.descriptionOfFacilityOfDj !== undefined) {
    newRestaurant["descriptionOfFacilityOfDj"] =
      req.body.descriptionOfFacilityOfDj;
  }
  try {
    await Model.updateOne({ SerialNo: id }, { $set: newRestro });
    res
      .status(200)
      .json({ messege: "restaurant updated successfully", "serial No": id });
  } catch (error) {
    res
      .status(500)
      .json({ messege: "restaurant not updated successfully", error });
  }
};
module.exports = {
  fetchAllRestaurants,
  addRestaurants,
  deleteOneRestaurants,
  deleteAllRestaurants,
  fetchaRestaurant,
  updateRestaurant
};
