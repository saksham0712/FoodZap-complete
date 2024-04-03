const express = require("express");
const orderModel = require("../model/orderModel");
const mongoose = require("mongoose");

// fetching all orders
const fetchOrders = async (req, res) => {
  try {
    data = await orderModel.find();
    res.status(200).json({ message: "all orders are here", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in fetching all the orders", error: error });
  }
};

// fetch one order
const fetchAOrder = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await orderModel.find({ srNo: id });
    res.status(200).json({ message: "order fetched", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in fetching the orders", error: error });
  }
};

// create a order
let i = 1;
const createOrder = async (req, res) => {
  const newOrder = {
    srNo: i,
    typeOfOrder: req.body.typeOfOrder,
    foodOrder: req.body.foodOrder,
    whoOrdered: req.body.whoOrdered,
    restaurant: req.body.restaurant,
    paymentMethod: req.body.paymentMethod,
    paymentStatus: req.body.paymentStatus,
    orderStatus: req.body.orderStatus,
  };
  i++;
  try {
    const data = await orderModel.create(newOrder);
    res
      .status(200)
      .json({ message: "order generated successfullt", order: data });
  } catch (error) {
    res.status(500).json({ message: "order not generated ", error: error });
  }
};

// delete a order
const deleteOrder = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await orderModel.deleteOne({ srNo: id });
    res
      .status(200)
      .json({ message: "order deleted successfullt", order: data });
  } catch (error) {
    res.status(500).json({ message: "order not deletd ", error: error });
  }
};
// delete all orders
const deleteAllOrder = async (req, res) => {
  try {
    await orderModel.deleteMany();
    res.status(200).json({ message: "All order deleted successfullt" });
  } catch (error) {
    res.status(500).json({ message: "All order not deletd ", error: error });
  }
};

// update a order
const updateOrder = async (req, res) => {
  const id = req.params.ID;
  const newUpdate = {};
  if (req.body.typeOfOrder !== undefined) {
    newUpdate["typeOfOrder"] = req.body.typeOfOrder;
  }
  if (req.body.foodOrder !== undefined) {
    newUpdate["foodOrder"] = req.body.foodOrder;
  }
  if (req.body.whoOrdered !== undefined) {
    newUpdate["whoOrdered"] = req.body.whoOrdered;
  }
  if (req.body.restaurant !== undefined) {
    newUpdate["restaurant"] = req.body.restaurant;
  }
  if (req.body.paymentMethod !== undefined) {
    newUpdate["paymentMethod"] = req.body.paymentMethod;
  }
  if (req.body.paymentStatus !== undefined) {
    newUpdate["paymentStatus"] = req.body.paymentStatus;
  }
  if (req.body.orderStatus !== undefined) {
    newUpdate["orderStatus"] = req.body.orderStatus;
  }
  try {
    const data = await orderModel.updateOne({ srNo: id }, { $set: newUpdate });
    res.status(200).json({ message: "order updated successfully", data: data });
  } catch (error) {
    res.status(500).json({ message: "update failed", error: error });
  }
};

module.exports = {
  fetchOrders,
  fetchAOrder,
  createOrder,
  deleteOrder,
  deleteAllOrder,
  updateOrder
};
