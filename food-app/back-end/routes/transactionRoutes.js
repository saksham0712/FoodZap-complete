const express = require('express');

const { fetchAtransaction, createTransaction, deleteTransaction, deleteAllTransaction, updateTransaction, fetchAlltransaction } = require('../controller/transactionController');
const transactionRouter = express.Router();

transactionRouter.get('/', fetchAlltransaction);
transactionRouter.get('/:ID', fetchAtransaction);
transactionRouter.post('/', createTransaction);
transactionRouter.delete('/:ID', deleteTransaction);
transactionRouter.delete('/', deleteAllTransaction);
transactionRouter.delete('/', deleteTransaction);
transactionRouter.put('/:ID', updateTransaction);

module.exports = transactionRouter;