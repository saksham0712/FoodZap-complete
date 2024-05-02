const mongoose = require("mongoose");
const express = require("express");
const transactionModel = require("../model/transactionModel");

const fetchAlltransaction = async (req, res) => {
  try {
    const data = await transactionModel.find();
    res
      .status(200)
      .json({ message: "all transaction fetched successfully", "data": data });
  } catch (error) {
    res.status(500).json({ message: "transactions not fetched", "error": error });
  }
};

const fetchAtransaction = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await transactionModel.find({ srNo: id });
    res
      .status(200)
      .json({ message: "transaction fetched successfully", "data": data });
  } catch (error) {
    res.status(500).json({ message: "transactions not fetched", "error": error });
  }
};

let i = 1;
const createTransaction = async (req, res) => {
  const newTransaction = {
    srNo: i,
    transactionID: req.body.originator.slice(0, 4) + req.body.reciever.slice(0, 4) + i,
    originator: req.body.originator,
    natureOfTransaction: req.body.natureOfTransaction,
    typeOfTransaction: req.body.typeOfTransaction,
    reciever: req.body.reciever,
    time: req.body.time,
    day: req.body.day,
    mode: req.body.mode,
    purpose: req.body.purpose,
    refundability: req.body.refundability,
  };
  i++;
  try {
    const data = await transactionModel.create(newTransaction);
    res
      .status(200)
      .json({ message: "transaction genrated  successfully", "data": data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "transactions not genrated", "error": error });
  }
};

const deleteAllTransaction = async (req, res) => {
  try {
    await transactionModel.deleteMany();
    res
      .status(200)
      .json({ message: "transaction genrated successfully", "data": data });
  } catch (error) {  res
    .status(500)
    .json({ message: "transactions deleted successfully", "error": error });}
};

const deleteTransaction = async(req, res) => {
    const id = req.params.ID;
    try {
        const data = await transactionModel.deleteOne({ srNo: id });
        res
          .status(200)
          .json({ message: "transaction deleted successfully", "data": data });
      } catch (error) {
        res.status(500).json({ message: "transactions not deleted", "error": error });
      }
}

const updateTransaction = async (req, res) => {
    const update = {};
    if( req.body.originator !== undefined){
        update["originator"] = req.body.originator
    }
    if( req.body.natureOfTransaction !== undefined){
        update["natureOfTransaction"] = req.body.natureOfTransaction
    }
    if( req.body.typeOfTransaction !== undefined){
        update["typeOfTransaction"] = req.body.typeOfTransaction
    }
    if( req.body.reciever !== undefined){
        update["reciever"] = req.body.reciever
    }
    if( req.body.time !== undefined){
        update["time"] = req.body.time
    }
    if( req.body.day !== undefined){
        update["day"] = req.body.day
    }
    if( req.body.mode !== undefined){
        update["mode"] = req.body.mode
    }
    if( req.body.purpose !== undefined){
        update["purpose"] = req.body.purpose
    }
    if( req.body.refundability !== undefined){
        update["refundability"] = req.body.refundability
    }
    const id = req.params.ID;
    try {
        const data = await transactionModel.updateOne({srNo: id}, {$set: update});
        res.status(200).json({"message": "transaction updated successfully", "data": data})
    } catch (error) {
        res.status(500).json({"message": "transaction not updated", "error": error})
            }
}

module.exports = {fetchAlltransaction, fetchAtransaction, createTransaction, deleteAllTransaction, deleteTransaction, updateTransaction}