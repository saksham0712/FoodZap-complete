const express = require('express');
const { fetchAllRestaurants, addRestaurants, deleteOneRestaurants, deleteAllRestaurants, fetchaRestaurant, updateRestaurant } = require('../controller/restaurantController');
const Router = express.Router();

// to fetch all the restus.
Router.get('/', fetchAllRestaurants);
// fetch a single restaus.
Router.get('/:ID', fetchaRestaurant)
// to create a new resturatns.
Router.post('/', addRestaurants)
// delete a restaurants 
Router.delete('/:ID', deleteOneRestaurants)
// delete all restaurants
Router.delete('/', deleteAllRestaurants)
// update resaaurants
Router.put('/:ID', updateRestaurant)


module.exports = Router;