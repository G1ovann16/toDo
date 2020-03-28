const router = require('express').Router();
 const { User } = require('../models/index.js')

router.get('/', (req, res)=>{

    User.findAll()
    .then(user => res.send(user))
    .catch(err=>{
        console.log(err);
        res.user(500).send({message: "error to load to user"})
      })
})

router.post('/', (req, res)=>{

    User.create({...req.body}) 
    .then(user => res.user(201).send(user))
    .catch(err=>{
        console.log(err);
        res.user(500).send({message: "error to add to user"})
      })
})


module.exports=router;