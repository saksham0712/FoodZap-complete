const express = require('express');
const Mongoose = require('mongoose');
const { fetchAOrder, fetchOrders, createOrder, deleteOrder, deleteAllOrder, updateOrder } = require('../controller/orderController');
const orderRouter = express.Router();


orderRouter.get('/', fetchOrders);
orderRouter.get('/:ID', fetchAOrder);
orderRouter.post('/', createOrder);
orderRouter.delete('/:ID', deleteOrder);
orderRouter.delete('/', deleteAllOrder);
orderRouter.put('/:ID', updateOrder);


module.exports = orderRouter;