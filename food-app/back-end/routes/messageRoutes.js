const mongoose = require('mongoose');
const express = require('express');
const { fetchingAllMessage, createMessage, deleteMessage, deleteAllMessages, updateMessage, fetchAMessage } = require('../controller/messageController');
const messRouter = express.Router();

messRouter.get('/', fetchingAllMessage);
messRouter.get('/:ID', fetchAMessage)
messRouter.post('/', createMessage);
messRouter.delete('/:ID', deleteMessage);
//delete all message
messRouter.delete('/', deleteAllMessages)
messRouter.put('/:ID', updateMessage)

module.exports = messRouter;
