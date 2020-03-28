const router = require('express').Router();
 const { Task } = require('../models/index.js')

router.get('/', (req, res)=>{

    Task.findAll()
    .then(task => res.send(task))
    .catch(err=>{
        console.log(err);
        res.task(500).send({message: "error to load to task"})
      })
})

router.post('/', (req, res)=>{

    Task.create({...req.body}) 
    .then(task => res.task(201).send(task))
    .catch(err=>{
        console.log(err);
        res.task(500).send({message: "error to add to task"})
      })
})


module.exports=router;