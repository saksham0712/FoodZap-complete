const mongoose = require('mongoose');
const express = require('express');
const { fetchDishes, fetchADish, createDish, deletedish, deleteAllDish, updateDish } = require('../controller/dishController');

const dishRouter = express.Router();

dishRouter.get('/', fetchDishes);
dishRouter.get('/:ID', fetchADish);
dishRouter.post('/', createDish);
dishRouter.delete('/:ID', deletedish);
dishRouter.delete('/', deleteAllDish);
dishRouter.put('/:ID', updateDish);


module.exports = dishRouter;