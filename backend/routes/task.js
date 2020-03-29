const router = require('express').Router();
 const { Task, Status } = require('../models/index.js')
 const TaskController = require('../controllers/taskController.js')

router.get('/', TaskController.getAll)

// post
router.post('/', TaskController.postAll)

// delete
router.delete('/', TaskController.deleteAll)

module.exports=router;