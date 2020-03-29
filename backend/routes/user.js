const router = require('express').Router();
 const { User } = require('../models/index.js')
 const UserController = require('../controllers/userController.js')

router.get('/', UserController.getAll)

// post

router.post('/', UserController.postAll)

module.exports=router;