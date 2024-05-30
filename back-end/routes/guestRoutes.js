const express = require('express');
const {fetchAllGuest, fetchAGuest, addGuest, deleteAGuest, deleteAllGuest} = require('../controller/guestController');
const Routers = express.Router();

Routers.get('/', fetchAllGuest);
Routers.get('/:ID', fetchAGuest);
Routers.post('/', addGuest);

Routers.delete('/:ID', deleteAGuest);
Routers.delete('/', deleteAllGuest);

module.exports = Routers;