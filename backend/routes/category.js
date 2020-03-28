const router = require('express').Router();
 const { Category } = require('../models/index.js')

router.get('/', (req, res)=>{

    Category.findAll()
    .then(category => res.send(category))
    .catch(err=>{
        console.log(err);
        res.category(500).send({message: "error to load to category"})
      })
})

router.post('/', (req, res)=>{

    Category.create({...req.body}) 
    .then(category => res.category(201).send(category))
    .catch(err=>{
        console.log(err);
        res.category(500).send({message: "error to add to category"})
      })
})


module.exports=router;