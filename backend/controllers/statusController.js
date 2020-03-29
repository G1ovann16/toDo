const { Status, Task } = require('../models/index.js');

const StatusController = {
    getAll(req,res){ 
        Status.findAll({
            include :[Task]
          })
          .then(status => res.send(status))
          .catch(err=>{
              console.log(err);
              res.status(500).send({message: "error to load to status"})
            })
    },
    postAll(req,res){
      let { name, register}= req.body;
      Status.create({
          name,
          register
      })
      .then(()=>{
          res.statusCode=201;
          res.json({status: 'ok'})
      })
      .catch(err =>{
          res.statusCode=401;
          res.json( {status: 'ko', message:err})
      })
  
     }
}

module.exports = StatusController;
