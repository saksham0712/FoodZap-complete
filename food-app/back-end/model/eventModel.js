
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    srNo: {
        type: Number,
        required: true
    },
    eventID: {
        type: String,
        required: true
    },
    StatusOfEntry: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    eventDescription: {
        type: String
    },
    hostName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    estimatedCommencementTimings: {
        type: String
    },
    commencementTimings: {
        type: String
    },
    venue: {
        type: String
    },
    subHostName: {
        type: String
    },
    keyOrder: {
        type: String
    },
    eventNature: {
        type: String,
        required: true
    },
    dressCode: {
        type: String
    },
    foodType: {
        type: String,
        required: true
    },
    estimatedInvitees: {
        type: String
    },
    actualInvitees: {
        type: String
    },
    InviteesNames: {
        type: String
    },
    acceptedInviteesCount: {
        type: String
    },
    acceptedInviteesNames: {
        type: String
    },
    rejectedInviteesCounts: {
        type: String
    },
    rejectedInviteesNames: {
        type: String
    },
    inviteRejectedNames: {
        type: String
    },
    pendingInviteesNames: {
        type: String
    },
    unrespondedInviteesNames: {
        type: String
    },
    starterFoods: {
        type: String
    },
    starterBeverages: {
        type: String
    },
    specialOrder: {
        type: String
    },
    estimatedMaximumDuration: {
        type: String
    },
    MaximumDurationTime: {
        type: String
    },

})


const eventModel = mongoose.model('events', eventSchema);
module.exports = eventModel;