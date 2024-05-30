const express = require("express");
const mongoose = require("mongoose");
const messModel = require("../model/messageModel");

let i = 1;



// fetching all the messages
const fetchingAllMessage = async (req, res) => {
  try {
    const data = await messModel.find();
    res
      .status(200)
      .json({ message: "all messages found successfully", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "operation is not done successfully", error: error });
  }
};

//fetching a single message 
const fetchAMessage = async (req, res) => {
 const id = req.params.ID
 try {
    const mess = await messModel.find({srNo: id})
    res.status(200).json({"message": "message found successfully", "data": mess})
 } catch (error) {
    res.status(500).json({"message": "message not found", "error": error})
 }
}

// creating new message
const createMessage = async (req, res) => {
  const newMessage = {
    srNo: i,
    messageID: i + req.body.originator,
    originator: req.body.originator,
    natureOfMessage: req.body.natureOfMessage,
    typeOfMessage: req.body.typeOfMessage,
    reciever: req.body.reciever,
    messageText: req.body.messageText,
  };
  if (req.body.timeOfOrigin !== undefined) {
    newMessage["timeOfOrigin"] = req.body.timeOfOrigin;
  }
  if (req.body.timeDelivery !== undefined) {
    newMessage["timeDelivery"] = req.body.timeDelivery;
  }
  if (req.body.sendingDay !== undefined) {
    newMessage["sendingDay"] = req.body.sendingDay;
  }
  if (req.body.recievingDay !== undefined) {
    newMessage["recievingDay"] = req.body.recievingDay;
  }
  if (req.body.attachedFiles !== undefined) {
    newMessage["attachedFiles"] = req.body.attachedFiles;
  }
  if (req.body.enclosedLink !== undefined) {
    newMessage["enclosedLink"] = req.body.enclosedLink;
  }
  i++;
  try {
    const data = await messModel.create(newMessage);
    console.log(data)
    res
      .status(200)
      .json({ message: "messege genrated successfully", data: data });
  } catch (error) {
    res.status(500).json({ message: "message not genrated", error: error });
  }
};

// delete a message
const deleteMessage = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await messModel.deleteOne({ srNo: id });
    res
      .status(200)
      .json({ message: "message deleted successfully", data: data });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "message not deleted successfully try again",
        error: error,
      });
  }
};

// delete all messages
const deleteAllMessages = async (req, res) => {
  try {
    await messModel.deleteMany();
    res.status(200).json({ message: "all messages deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "all messages not deleted successfully" });
  }
};

// updating any message
const updateMessage = async (req, res) => {
  const id = req.params.ID;
  const newMessage = {};

  if (req.body.originator !== undefined) {
    newMessage["originator"] = req.body.originator;
  }
  if (req.body.natureOfMessage !== undefined) {
    newMessage["natureOfMessage"] = req.body.natureOfMessage;
  }
  if (req.body.typeOfMessage !== undefined) {
    newMessage["typeOfMessage"] = req.body.typeOfMessage;
  }
  if (req.body.reciever !== undefined) {
    newMessage["reciever"] = req.body.reciever;
  }
  if (req.body.messageText !== undefined) {
    newMessage["messageText"] = req.body.messageText;
  }
  if (req.body.timeOfOrigin !== undefined) {
    newMessage["timeOfOrigin"] = req.body.timeOfOrigin;
  }
  if (req.body.timeDelivery !== undefined) {
    newMessage["timeDelivery"] = req.body.timeDelivery;
  }
  if (req.body.sendingDay !== undefined) {
    newMessage["sendingDay"] = req.body.sendingDay;
  }
  if (req.body.recievingDay !== undefined) {
    newMessage["recievingDay"] = req.body.recievingDay;
  }
  if (req.body.attachedFiles !== undefined) {
    newMessage["attachedFiles"] = req.body.attachedFiles;
  }
  if (req.body.enclosedLink !== undefined) {
    newMessage["enclosedLink"] = req.body.enclosedLink;
  }
  try {
    await messModel.updateOne({ srNo: id }, { $set: newMessage });
    res.status(200).json({"message": "message updated successfully"})
  } catch (error) {
    res.status(500).json({"message": "message not updated not successfully", "error": error})
  }
};


module.exports = { fetchingAllMessage, fetchAMessage, createMessage, deleteMessage, deleteAllMessages, updateMessage };
