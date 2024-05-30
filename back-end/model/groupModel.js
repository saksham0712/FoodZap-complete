const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  srNo: {
    type: Number,
    required: true,
  },
  GroupID: {
    type: String,
    required: true,
  },
  AdminName: {
    type: String,
    required: true,
  },
  subAdmin: {
    type: String,
    required: false,
  },
  FormationDate: {
    type: String,
    required: true,
  },
  groupType: {
    type: String,
    required: true,
  },
  entryStatus: {
    type: String,
    required: true,
  },
  membersCount: {
    type: Number,
  },
  membersNames: {
    type: Object,
  },
  activeMemberNumbers: {
    type: Number,
  },
  activeMemberNames: {
    type: Object,
  },
  membersOnLeaveCount: {
    type: Number,
  },
  membersOnLeaveNames: {
    type: Object
  },
  suspendedMemberCount: {
    type: Number
  },
  membersInRecycleBinCount: {
    type: Number
  },
  namesMembersInRecycleBin: {
    type: Object
  },
  timeWindowOperation: {
    type: Object
  },
  status: {
    type: String,
    require: true
  },
  pastOrder: {
    type: String
  }
});

const groupModel = mongoose.model("groups", groupSchema);
module.exports = groupModel;
