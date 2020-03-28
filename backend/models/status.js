'use strict';
module.exports = (sequelize, DataTypes) => {
  // const faker = require('faker');
  // const times = require("lodash.times");
  // const random = require("lodash.random");

  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    register: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
    Status.belongsTo(models.Task);
  };

//   Status.sync({force:true}).then(()=>
// {
//     Status.bulkCreate(times(10, () =>({
//         name: `${faker.name.firstName()}`,
//         register:     random(1, 5),
//         register: random(1, 5)
//     })))
// })
  return Status;
};