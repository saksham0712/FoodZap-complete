const express = require('express')
const router = express.Router();
const {addUser, deleteUser, deleteAllUser, findUser, updateUser, fetchAllUser} = require('../controller/userController');

router.post('/', addUser);
router.delete('/:ID', deleteUser)
router.delete('/', deleteAllUser)
router.get('/:ID', findUser)

router.get('/', fetchAllUser)

router.put('/:ID', updateUser)



module.exports = router;