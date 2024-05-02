const express = require('express');
const groupModel = require('../model/groupModel');

// fetching all the group
const fetchGroups = async (req, res) => {
    try {
        const kya = await groupModel.find()
        res.status(200).json({"message": "all groups fetched successfully", "data": kya})
    } catch (error) {
        res.status(200).json({"message": "all groups not fetched", "error": error})
        
    }
}

const fetchGroup = async(req, res) => {
    const id = req.params.ID;
    try {
        const data = await groupModel.find({srNo: id})
        res.status(200).json({"message": "group fetched successfully", "data": data})
        
    } catch (error) {
        res.status(200).json({"message": "all groups not fetched", "error": error})
        
    }
}


const deleteGroup = async(req, res) => {
    const id = req.params.ID;
    try {
        const data = await groupModel.deleteOne({srNo: id})
        res.status(200).json({"message": "group deleted successfully", "data": data})
        
    } catch (error) {
        res.status(200).json({"message": "groups not deleted", "error": error})
        
    }
}



const deleteGroups = async(req, res) => {
    try {
        await groupModel.deleteMany()
        res.status(200).json({"message": "all group deleted successfully"})
        
    } catch (error) {
        res.status(200).json({"message": "groups not deleted", "error": error})
        
    }
}


let i = 1;
const createGroup = async(req, res) => {
    const newGroup = {
        srNo: i,
        groupID: req.body.AdminName.slice(0,4) + i,
        AdminName: req.body.AdminName,
        FormationDate: req.body.FormationDate,
        groupType: req.body.groupType,
        entryStatus: req.body.entryStatus,
        status: req.body.status
    }
    if(req.body.subAdmin !== undefined){
       newGroup["subAdmin"] = req.body.subAdmin
    }
    if(req.body.membersCount !== undefined){
       newGroup["membersCount"] = req.body.membersCount
    }
    if(req.body.membersNames !== undefined){
       newGroup["membersNames"] = req.body.membersNames
    }
    if(req.body.activeMemberNumbers !== undefined){
       newGroup["activeMemberNumbers"] = req.body.activeMemberNumbers
    }
    if(req.body.activeMemberNames !== undefined){
       newGroup["activeMemberNames"] = req.body.activeMemberNames
    }
    if(req.body.membersOnLeaveCount !== undefined){
       newGroup["membersOnLeaveCount"] = req.body.membersOnLeaveCount
    }
    if(req.body.membersOnLeaveNames !== undefined){
       newGroup["membersOnLeaveNames"] = req.body.membersOnLeaveNames
    }
    if(req.body.suspendedMemberCount !== undefined){
       newGroup["suspendedMemberCount"] = req.body.suspendedMemberCount
    }
    if(req.body.membersInRecycleBinCount !== undefined){
       newGroup["membersInRecycleBinCount"] = req.body.membersInRecycleBinCount
    }
    if(req.body.namesMembersInRecycleBin !== undefined){
       newGroup["namesMembersInRecycleBin"] = req.body.namesMembersInRecycleBin
    }
    if(req.body.timeWindowOperation !== undefined){
       newGroup["timeWindowOperation"] = req.body.timeWindowOperation
    }
    if(req.body.pastOrder !== undefined){
       newGroup["pastOrder"] = req.body.pastOrder
    }
    i++;  
    try {
        const data = groupModel.create(newGroup)
        res.status(200).json({"message": "group created successfully", "data": data})
        } catch (error) {
        res.status(500).json({"message": "group not created", "error": error})
    }
}

const updateGroup = async(req, res)=> {
    const id = req.params.ID;
    const update = {};
    if(req.body.AdminName !== undefined){
        update["AdminName"] = req.body.AdminName
    }
    if(req.body.groupType !== undefined){
        update["groupType"] = req.body.groupType
    }
    if(req.body.entryStatus !== undefined){
        update["entryStatus"] = req.body.entryStatus
    }
    if(req.body.status !== undefined){
        update["status"] = req.body.status
    }
    if(req.body.subAdmin !== undefined){
        update["subAdmin"] = req.body.subAdmin
     }
     if(req.body.membersCount !== undefined){
        update["membersCount"] = req.body.membersCount
     }
     if(req.body.membersNames !== undefined){
        update["membersNames"] = req.body.membersNames
     }
     if(req.body.activeMemberNumbers !== undefined){
        update["activeMemberNumbers"] = req.body.activeMemberNumbers
     }
     if(req.body.activeMemberNames !== undefined){
        update["activeMemberNames"] = req.body.activeMemberNames
     }
     if(req.body.membersOnLeaveCount !== undefined){
        update["membersOnLeaveCount"] = req.body.membersOnLeaveCount
     }
     if(req.body.membersOnLeaveNames !== undefined){
        update["membersOnLeaveNames"] = req.body.membersOnLeaveNames
     }
     if(req.body.suspendedMemberCount !== undefined){
        update["suspendedMemberCount"] = req.body.suspendedMemberCount
     }
     if(req.body.membersInRecycleBinCount !== undefined){
        update["membersInRecycleBinCount"] = req.body.membersInRecycleBinCount
     }
     if(req.body.namesMembersInRecycleBin !== undefined){
        update["namesMembersInRecycleBin"] = req.body.namesMembersInRecycleBin
     }
     if(req.body.timeWindowOperation !== undefined){
        update["timeWindowOperation"] = req.body.timeWindowOperation
     }
     if(req.body.pastOrder !== undefined){
        update["pastOrder"] = req.body.pastOrder
     }
try {
    const data = await groupModel.updateOne({srNo: id}, {$set: update})
    res.status(200).json({"message": "group updated successfully", "data": data})
} catch (error) {
    res.status(200).json({"message": "group not updated successfully", "error": error})    
}
}


module.exports = {fetchGroups, fetchGroup, deleteGroup, deleteGroups, createGroup, updateGroup}