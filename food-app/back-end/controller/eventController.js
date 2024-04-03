const express = require("express");
const eventModel = require("../model/eventModel");

const fetchEvents = async (req, res) => {
  try {
    const data = await eventModel.find();
    res
      .status(200)
      .json({ message: "all events fetched successfully", "data": data });
  } catch (error) {
    res.status(500).json({ message: "event not fetched", "error": error });
  }
};

const fetchAEvent = async (req, res) => {
  const id = req.params.ID;
  try {
    data = await eventModel.find({ srNo: id });
    res.status(200).json({ message: "event fetched successfully", "data": data });
  } catch (error) {
    res.status(500).json({ message: "event not fetched", "error": error });
  }
};

const deleteEvents = async (req, res) => {
  try {
    await eventModel.deleteMany();
    res.status(200).json({ message: "All events deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "event not deleted", "error": error });
  }
};

const deleteAEvent = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await eventModel.deleteOne({ srNo: id });
    res.status(200).json({ message: "event deleted successfully", "data": data });
  } catch (error) {
    res.status(500).json({ message: "event not deleted", "error": error });
  }
};

let i = 1;
const createEvent = async (req, res) => {
  const newEvent = {
    srNo: i,
    eventID: req.body.eventName.slice(0, 3) + req.body.hostName.slice(0, 3) + i,
    StatusOfEntry: req.body.StatusOfEntry,
    eventName: req.body.eventName,
    hostName: req.body.hostName,
    date: req.body.date,
    eventNature: req.body.eventNature,
    foodType: req.body.foodType,
  };
  if(req.body.estimatedCommencementTimings !== undefined){
    newEvent["estimatedCommencementTimings"] = req.body.estimatedCommencementTimings 
  }
  if(req.body.commencementTimings !== undefined){
    newEvent["commencementTimings"] = req.body.commencementTimings 
  }
  if(req.body.venue !== undefined){
    newEvent["venue"] = req.body.venue 
  }
  if(req.body.subHostName !== undefined){
    newEvent["subHostName"] = req.body.subHostName 
  }
  if(req.body.subHostName !== undefined){
    newEvent["subHostName"] = req.body.subHostName 
  }
  if(req.body.keyOrder !== undefined){
    newEvent["keyOrder"] = req.body.keyOrder 
  }
  if(req.body.dressCode !== undefined){
    newEvent["dressCode"] = req.body.dressCode 
  }
  if(req.body.estimatedInvitees !== undefined){
    newEvent["estimatedInvitees"] = req.body.estimatedInvitees 
  }
  if(req.body.actualInvitees !== undefined){
    newEvent["actualInvitees"] = req.body.actualInvitees 
  }
  if(req.body.InviteesNames !== undefined){
    newEvent["InviteesNames"] = req.body.InviteesNames 
  }
  if(req.body.acceptedInviteesCount !== undefined){
    newEvent["acceptedInviteesCount"] = req.body.acceptedInviteesCount 
  }
  if(req.body.acceptedInviteesNames !== undefined){
    newEvent["acceptedInviteesNames"] = req.body.acceptedInviteesNames 
  }
  if(req.body.rejectedInviteesCounts !== undefined){
    newEvent["rejectedInviteesCounts"] = req.body.rejectedInviteesCounts 
  }
  if(req.body.rejectedInviteesNames !== undefined){
    newEvent["rejectedInviteesNames"] = req.body.rejectedInviteesNames 
  }
  if(req.body.inviteRejectedNames !== undefined){
    newEvent["inviteRejectedNames"] = req.body.inviteRejectedNames 
  }
  if(req.body.pendingInviteesNames !== undefined){
    newEvent["pendingInviteesNames"] = req.body.pendingInviteesNames 
  }
  if(req.body.unrespondedInviteesNames !== undefined){
    newEvent["unrespondedInviteesNames"] = req.body.unrespondedInviteesNames 
  }
  if(req.body.starterFoods !== undefined){
    newEvent["starterFoods"] = req.body.starterFoods 
  }
  if(req.body.starterBeverages !== undefined){
    newEvent["starterBeverages"] = req.body.starterBeverages 
  }
  if(req.body.specialOrder !== undefined){
    newEvent["specialOrder"] = req.body.specialOrder 
  }
  if(req.body.estimatedMaximumDuration !== undefined){
    newEvent["estimatedMaximumDuration"] = req.body.estimatedMaximumDuration 
  }
  if(req.body.estimatedMaximumDuration !== undefined){
    newEvent["estimatedMaximumDuration"] = req.body.estimatedMaximumDuration 
  }
  if(req.body.MaximumDurationTime !== undefined){
    newEvent["MaximumDurationTime"] = req.body.MaximumDurationTime 
  }
  i++;
try {
    const data = await eventModel.create(newEvent)
    res.status(200).json({"message": "event created successfully", "data": data})
} catch (error) {
    res.status(500).json({"message": "event not created", "error": error})
}
};

const updateEvent = async(req, res) => {
    const id = req.params.ID;
    const updated = {};
  if(req.body.StatusOfEntry !== undefined){
    updated["StatusOfEntry"] = req.body.StatusOfEntry 
  }
  if(req.body.eventName !== undefined){
    updated["eventName"] = req.body.eventName 
  }
  if(req.body.hostName !== undefined){
    updated["hostName"] = req.body.hostName 
  }
  if(req.body.date !== undefined){
    updated["date"] = req.body.date 
  }
  if(req.body.eventNature !== undefined){
    updated["eventNature"] = req.body.eventNature 
  }
  if(req.body.foodType !== undefined){
    updated["foodType"] = req.body.foodType 
  }
  if(req.body.estimatedCommencementTimings !== undefined){
    updated["estimatedCommencementTimings"] = req.body.estimatedCommencementTimings 
  }
  if(req.body.commencementTimings !== undefined){
    updated["commencementTimings"] = req.body.commencementTimings 
  }
  if(req.body.venue !== undefined){
    updated["venue"] = req.body.venue 
  }
  if(req.body.subHostName !== undefined){
    updated["subHostName"] = req.body.subHostName 
  }
  if(req.body.subHostName !== undefined){
    updated["subHostName"] = req.body.subHostName 
  }
  if(req.body.keyOrder !== undefined){
    updated["keyOrder"] = req.body.keyOrder 
  }
  if(req.body.dressCode !== undefined){
    updated["dressCode"] = req.body.dressCode 
  }
  if(req.body.estimatedInvitees !== undefined){
    updated["estimatedInvitees"] = req.body.estimatedInvitees 
  }
  if(req.body.actualInvitees !== undefined){
    updated["actualInvitees"] = req.body.actualInvitees 
  }
  if(req.body.InviteesNames !== undefined){
    updated["InviteesNames"] = req.body.InviteesNames 
  }
  if(req.body.acceptedInviteesCount !== undefined){
    updated["acceptedInviteesCount"] = req.body.acceptedInviteesCount 
  }
  if(req.body.acceptedInviteesNames !== undefined){
    updated["acceptedInviteesNames"] = req.body.acceptedInviteesNames 
  }
  if(req.body.rejectedInviteesCounts !== undefined){
    updated["rejectedInviteesCounts"] = req.body.rejectedInviteesCounts 
  }
  if(req.body.rejectedInviteesNames !== undefined){
    updated["rejectedInviteesNames"] = req.body.rejectedInviteesNames 
  }
  if(req.body.inviteRejectedNames !== undefined){
    updated["inviteRejectedNames"] = req.body.inviteRejectedNames 
  }
  if(req.body.pendingInviteesNames !== undefined){
    updated["pendingInviteesNames"] = req.body.pendingInviteesNames 
  }
  if(req.body.unrespondedInviteesNames !== undefined){
    updated["unrespondedInviteesNames"] = req.body.unrespondedInviteesNames 
  }
  if(req.body.starterFoods !== undefined){
    updated["starterFoods"] = req.body.starterFoods 
  }
  if(req.body.starterBeverages !== undefined){
    updated["starterBeverages"] = req.body.starterBeverages 
  }
  if(req.body.specialOrder !== undefined){
    updated["specialOrder"] = req.body.specialOrder 
  }
  if(req.body.estimatedMaximumDuration !== undefined){
    updated["estimatedMaximumDuration"] = req.body.estimatedMaximumDuration 
  }
  if(req.body.estimatedMaximumDuration !== undefined){
    updated["estimatedMaximumDuration"] = req.body.estimatedMaximumDuration 
  }
  if(req.body.MaximumDurationTime !== undefined){
    updated["MaximumDurationTime"] = req.body.MaximumDurationTime 
  } 
    try {
        const data = await eventModel.updateOne({srNo: id}, {$set: updated})
        res.status(200).json({"message": "event updated successfully", "data": data})
    } catch (error) {
        res.status(200).json({"message": "event not updated", "error": error})
        
    }
}

module.exports = {fetchEvents, fetchAEvent, deleteEvents, deleteAEvent, createEvent, updateEvent}