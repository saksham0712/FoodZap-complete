const express = require("express");
const model = require("../model/userModel");
const { Error } = require("mongoose");


// this is for fetching all user

const fetchAllUser = async (req, res) => {
    try {
        const data = await model.find()
        res.status(200).json({"messege": "all user fetched successfully", "user": data})        
    } catch (error) {
        res.status(500).json({"messege": "fetching failed", "error": error})
    }
}



// this is for adding user

const addUser = async (req, res) => {
  const newUser = {
    Name: req.body.Name,
    email: req.body.email,
    phoneNum: req.body.phoneNum,
    DOB: req.body.DOB,
    Password: req.body.Password,
    serialNumber: req.body.Name.slice(0, 4) + req.body.phoneNum.slice(-4),
  };
  if (req.body.college !== undefined) {
    newUser["college"] = req.body.college;
  }
  if (req.body.branch !== undefined) {
    newUser["branch"] = req.body.branch;
  }
  if (req.body.typeOfUser !== undefined) {
    newUser["typeOfUser"] = req.body.typeOfUser;
  }
  if (req.body.batch !== undefined) {
    newUser["batch"] = req.body.batch;
  }
  if (req.body.profilePicture !== undefined) {
    newUser["profilePicture"] = req.body.profilePicture;
  }
  if (req.body.payment !== undefined) {
    newUser["payment"] = req.body.payment;
  }
  if (req.body.orderRelated !== undefined) {
    newUser["orderRelated"] = req.body.orderRelated;
  }
  if (req.body.ralatedToPayments !== undefined) {
    newUser["ralatedToPayments"] = req.body.ralatedToPayments;
  }
  if (req.body.relatedToGroups !== undefined) {
    newUser["relatedToGroups"] = req.body.relatedToGroups;
  }
  if (req.body.userInNegativeList !== undefined) {
    newUser["userInNegativeList"] = req.body.userInNegativeList;
  }
  if (req.body.CanteensOrRestaurantInNegativeList !== undefined) {
    newUser["CanteensOrRestaurantInNegativeList"] =
      req.body.CanteensOrRestaurantInNegativeList;
  }
  if (req.body.PrepaidOrderLimit !== undefined) {
    newUser["PrepaidOrderLimit"] = req.body.PrepaidOrderLimit;
  }
  if (req.body.UnsecuredOrderLimit !== undefined) {
    newUser["UnsecuredOrderLimit"] = req.body.UnsecuredOrderLimit;
  }
  if (req.body.WalletBalance !== undefined) {
    newUser["WalletBalance"] = req.body.WalletBalance;
  }
  if (req.body.ProfileStatus !== undefined) {
    newUser["ProfileStatus"] = req.body.ProfileStatus;
  }
  if (req.body.PastOrderHistory !== undefined) {
    newUser["PastOrderHistory"] = req.body.PastOrderHistory;
  }
  if (req.body.TransactionHistory !== undefined) {
    newUser["TransactionHistory"] = req.body.TransactionHistory;
  }
  if (req.body.CurrentOrders !== undefined) {
    newUser["CurrentOrders"] = req.body.CurrentOrders;
  }
  if (req.body.PastEvents !== undefined) {
    newUser["PastEvents"] = req.body.PastEvents;
  }
  if (req.body.ReceivedMsg !== undefined) {
    newUser["ReceivedMsg"] = req.body.ReceivedMsg;
  }
  if (req.body.SentMsg !== undefined) {
    newUser["SentMsg"] = req.body.SentMsg;
  }
  if (req.body.DraftMessages !== undefined) {
    newUser["DraftMessages"] = req.body.DraftMessages;
  }
  if (req.body.SystemNotifications !== undefined) {
    newUser["SystemNotifications"] = req.body.SystemNotifications;
  }
  try {
    await model.create(newUser);
    res.status(200).json({
      messsege:
        "new user is added in the first try please save you unique serialNumber",
      newUser,
    });
  } catch (error) {
    console.log(error);
    if (
      error["keyPattern"] !== undefined &&
      error["keyPattern"]["phoneNum"] == 1
    ) {
      res.status(500).json({
        messege: "phone number is already registered",
        error: error,
      });
    } else if (
      error["keyPattern"] !== undefined &&
      error["keyPattern"]["serialNumber"] == 1
    ) {
      newUser["serialNumber"] += "s";
      try {
        await model.create(newUser);
        res
          .status(200)
          .json({ messege: "new user is added successfully 2", newUser });
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

// delete a perticular user
const deleteUser = async (req, res) => {
  const id = req.params.ID;
  try {
    await model.deleteOne({ serialNumber: id });

    res.status(200).json({
      messege: "user deleted successfully",
      serialNumber: id,
    });
  } catch (error) {
    console.log(error);
  }
};

// deleting all the users
const deleteAllUser = async (req, res) => {
  try {
    await model.deleteMany({});
    res.status(200).json({ messsege: "all users are deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ messege: "this operation is not done", error: error });
  }
};

// find a user which is read a user
const findUser = async (req, res) => {
  const id = req.params.ID;
  try {
    const data = await model.find({ serialNumber: id });
    console.log(data);
    res.status(200).json({ messege: "your data is found", data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messege: "user not found", error });
  }
};

// last update a user
const updateUser = async (req, res) => {
  if (req.params.ID == "search") {
    const userToSearch = {};
    if (req.body.Name !== undefined) {
      userToSearch["Name"] = req.body.Name;
    }
    if (req.body.email !== undefined) {
      userToSearch["email"] = req.body.email;
    }
    if (req.body.phoneNum !== undefined) {
      userToSearch["phoneNum"] = req.body.phoneNum;
    }
    if (req.body.DOB !== undefined) {
      userToSearch["DOB"] = req.body.DOB;
    }
    if (req.body.Password !== undefined) {
      userToSearch["Password"] = req.body.Password;
    }
    if (req.body.serialNumber !== undefined) {
      userToSearch["serialNumber"] = req.body.serialNumber;
    }
    if (req.body.college !== undefined) {
      userToSearch["college"] = req.body.college;
    }
    if (req.body.branch !== undefined) {
      userToSearch["branch"] = req.body.branch;
    }
    if (req.body.typeOfUser !== undefined) {
      userToSearch["typeOfUser"] = req.body.typeOfUser;
    }
    if (req.body.batch !== undefined) {
      userToSearch["batch"] = req.body.batch;
    }
    if (req.body.profilePicture !== undefined) {
      userToSearch["profilePicture"] = req.body.profilePicture;
    }
    if (req.body.payment !== undefined) {
      userToSearch["payment"] = req.body.payment;
    }
    if (req.body.orderRelated !== undefined) {
      userToSearch["orderRelated"] = req.body.orderRelated;
    }
    if (req.body.ralatedToPayments !== undefined) {
      userToSearch["ralatedToPayments"] = req.body.ralatedToPayments;
    }
    if (req.body.relatedToGroups !== undefined) {
      userToSearch["relatedToGroups"] = req.body.relatedToGroups;
    }
    if (req.body.userInNegativeList !== undefined) {
      userToSearch["userInNegativeList"] = req.body.userInNegativeList;
    }
    if (req.body.CanteensOrRestaurantInNegativeList !== undefined) {
      userToSearch["CanteensOrRestaurantInNegativeList"] =
        req.body.CanteensOrRestaurantInNegativeList;
    }
    if (req.body.PrepaidOrderLimit !== undefined) {
      userToSearch["PrepaidOrderLimit"] = req.body.PrepaidOrderLimit;
    }
    if (req.body.UnsecuredOrderLimit !== undefined) {
      userToSearch["UnsecuredOrderLimit"] = req.body.UnsecuredOrderLimit;
    }
    if (req.body.WalletBalance !== undefined) {
      userToSearch["WalletBalance"] = req.body.WalletBalance;
    }
    if (req.body.ProfileStatus !== undefined) {
      userToSearch["ProfileStatus"] = req.body.ProfileStatus;
    }
    if (req.body.PastOrderHistory !== undefined) {
      userToSearch["PastOrderHistory"] = req.body.PastOrderHistory;
    }
    if (req.body.TransactionHistory !== undefined) {
      userToSearch["TransactionHistory"] = req.body.TransactionHistory;
    }
    if (req.body.CurrentOrders !== undefined) {
      userToSearch["CurrentOrders"] = req.body.CurrentOrders;
    }
    if (req.body.PastEvents !== undefined) {
      userToSearch["PastEvents"] = req.body.PastEvents;
    }
    if (req.body.ReceivedMsg !== undefined) {
      userToSearch["ReceivedMsg"] = req.body.ReceivedMsg;
    }
    if (req.body.SentMsg !== undefined) {
      userToSearch["SentMsg"] = req.body.SentMsg;
    }
    if (req.body.DraftMessages !== undefined) {
      userToSearch["DraftMessages"] = req.body.DraftMessages;
    }
    if (req.body.SystemNotifications !== undefined) {
      userToSearch["SystemNotifications"] = req.body.SystemNotifications;
    }
    console.log(userToSearch);
    // res.status(200).json({ messege: "done" });
    try {
      const data = await model.find(userToSearch);
      // console.log(data.length)
      if (data.length == 0) {
        res.status(200).json({
          message: "no such user exists!!!",
          details: data,
        });
      } else {
        // console.log(data.length)
        res.status(200).json({
          message: `${data.length} Users found succesfully!`,
          details: data,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "User can not be found",
        error: err,
      });
    }
  } else {
    const id = req.param.ID;
    const newUser = {};
    if (req.body.Name !== undefined) {
      newUser["Name"] = req.body.Name;
    }
    if (req.body.email !== undefined) {
      newUser["email"] = req.body.email;
    }
    if (req.body.phoneNum !== undefined) {
      newUser["phoneNum"] = req.body.phoneNum;
    }
    if (req.body.DOB !== undefined) {
      newUser["DOB"] = req.body.DOB;
    }
    if (req.body.Password !== undefined) {
      newUser["Password"] = req.body.Password;
    }
    if (req.body.serialNumber !== undefined) {
      newUser["serialNumber"] = req.body.serialNumber;
    }
    if (req.body.college !== undefined) {
      newUser["college"] = req.body.college;
    }
    if (req.body.branch !== undefined) {
      newUser["branch"] = req.body.branch;
    }
    if (req.body.typeOfUser !== undefined) {
      newUser["typeOfUser"] = req.body.typeOfUser;
    }
    if (req.body.batch !== undefined) {
      newUser["batch"] = req.body.batch;
    }
    if (req.body.profilePicture !== undefined) {
      newUser["profilePicture"] = req.body.profilePicture;
    }
    if (req.body.payment !== undefined) {
      newUser["payment"] = req.body.payment;
    }
    if (req.body.orderRelated !== undefined) {
      newUser["orderRelated"] = req.body.orderRelated;
    }
    if (req.body.ralatedToPayments !== undefined) {
      newUser["ralatedToPayments"] = req.body.ralatedToPayments;
    }
    if (req.body.relatedToGroups !== undefined) {
      newUser["relatedToGroups"] = req.body.relatedToGroups;
    }
    if (req.body.userInNegativeList !== undefined) {
      newUser["userInNegativeList"] = req.body.userInNegativeList;
    }
    if (req.body.CanteensOrRestaurantInNegativeList !== undefined) {
      newUser["CanteensOrRestaurantInNegativeList"] =
        req.body.CanteensOrRestaurantInNegativeList;
    }
    if (req.body.PrepaidOrderLimit !== undefined) {
      newUser["PrepaidOrderLimit"] = req.body.PrepaidOrderLimit;
    }
    if (req.body.UnsecuredOrderLimit !== undefined) {
      newUser["UnsecuredOrderLimit"] = req.body.UnsecuredOrderLimit;
    }
    if (req.body.WalletBalance !== undefined) {
      newUser["WalletBalance"] = req.body.WalletBalance;
    }
    if (req.body.ProfileStatus !== undefined) {
      newUser["ProfileStatus"] = req.body.ProfileStatus;
    }
    if (req.body.PastOrderHistory !== undefined) {
      newUser["PastOrderHistory"] = req.body.PastOrderHistory;
    }
    if (req.body.TransactionHistory !== undefined) {
      newUser["TransactionHistory"] = req.body.TransactionHistory;
    }
    if (req.body.CurrentOrders !== undefined) {
      newUser["CurrentOrders"] = req.body.CurrentOrders;
    }
    if (req.body.PastEvents !== undefined) {
      newUser["PastEvents"] = req.body.PastEvents;
    }
    if (req.body.ReceivedMsg !== undefined) {
      newUser["ReceivedMsg"] = req.body.ReceivedMsg;
    }
    if (req.body.SentMsg !== undefined) {
      newUser["SentMsg"] = req.body.SentMsg;
    }
    if (req.body.DraftMessages !== undefined) {
      newUser["DraftMessages"] = req.body.DraftMessages;
    }
    if (req.body.SystemNotifications !== undefined) {
      newUser["SystemNotifications"] = req.body.SystemNotifications;
    }
    try {
        await model.updateMany({serialNumber: id}, {$set: newUser });
        res.status(200).json({"messsege": "user updated successfully","updated data": newUser})
    } catch (error) {
        res.status(500).json({"messege": "user is not updated", error})
    }
  }
};

module.exports = { addUser, deleteUser, deleteAllUser, findUser, updateUser, fetchAllUser };
