const express = require('express');
const { fetchEvents, fetchAEvent, deleteAEvent, deleteEvents, createEvent, updateEvent } = require('../controller/eventController');
const eventRoutes = express.Router();

eventRoutes.get('/', fetchEvents)
eventRoutes.get('/:ID', fetchAEvent)
eventRoutes.delete('/:ID', deleteAEvent)
eventRoutes.delete('/', deleteEvents)
eventRoutes.post('/', createEvent)
eventRoutes.put('/:ID', updateEvent)


module.exports = eventRoutes;