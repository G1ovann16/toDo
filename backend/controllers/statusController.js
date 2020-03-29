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

     }
}

module.exports = StatusController;
