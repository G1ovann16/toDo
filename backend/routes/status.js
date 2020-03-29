const router = require('express').Router();
const { Status, Task } = require('../models/index.js')
const StatusController = require('../controllers/statusController')

router.get('/', StatusController.getAll)

router.get('/', StatusController.postAll)

module.exports=router;