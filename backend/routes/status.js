const router = require('express').Router();
 const { Status } = require('../models/index.js')

router.get('/', (req, res)=>{

    Status.findAll()
    .then(status => res.send(status))
    .catch(err=>{
        console.log(err);
        res.status(500).send({message: "error to load to status"})
      })
})

router.post('/', (req, res)=>{

    Status.create({...req.body}) 
    .then(status => res.status(201).send(status))
    .catch(err=>{
        console.log(err);
        res.status(500).send({message: "error to add to status"})
      })
})


module.exports=router;