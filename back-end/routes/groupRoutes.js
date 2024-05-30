const express = require('express');
const { fetchGroup, fetchGroups, deleteGroups, deleteGroup, createGroup, updateGroup } = require('../controller/groupController');
const groupRouter = express.Router();

groupRouter.get('/', fetchGroups)
groupRouter.get('/:ID', fetchGroup)
groupRouter.delete('/', deleteGroups)
groupRouter.delete('/:ID', deleteGroup)
groupRouter.post('/', createGroup)
groupRouter.put('/:ID', updateGroup)


module.exports = groupRouter;