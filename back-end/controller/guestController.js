const express = require("express");
const Model = require('../model/guestModel');
const cors = require('cors');


const app = express();
app.use(cors());

const fetchAllGuest = async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json({message: "All Guest users fetched successfully", data})
    } catch (error) {
        res.status(500).json({message: "data not fetched", error})
    }
}



const addGuest = async(req,res) => {
    const newGuest = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
    }
    try {
        await Model.create(newGuest);
        res.status(200).json({message: "Guest user added successfully", newGuest})
    } catch (error) {
        if (
            error["keyPattern"] !== undefined &&
            error["keyPattern"]["phone"] == 1
          ) {
            res.status(500).json({
              messege: "phone number is already registered",
              error: error,
            });
          }else {
            res.status(500).json({
              messege:
                "user not registered. please try again and fill all the field carefully",
            });
          }
    }
}

const deleteAGuest = async (req, res) => {
    const id = req.params.ID;
    try {
        const data = await Model.deleteOne({ phone: id });
        res.status(200).json({message: "Guest user deleted successfully", data})
    } catch (error) {
        res.status(500).json({message: "data not deleted", error})
    }
}

const deleteAllGuest = async (req, res) => {
    try {
        Model.deleteMany({});
        res.status(200).json({message: "All guest user deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "data not deleted", error})
    }
}

const fetchAGuest = async (req, res) => {
    const id = req.params.ID;
    try {
        const data = await Model.find({ phone: id });
        res.status(200).json({message: "Guest user fetched successfully", "data": data})
    } catch (error) {
        res.status(500).json({message: "data not fetched", error})
    }
};


module.exports = {fetchAllGuest, fetchAGuest, addGuest, deleteAGuest, deleteAllGuest};