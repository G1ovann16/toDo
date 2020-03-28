'use strict';
module.exports = (sequelize, DataTypes) => {
  // const faker = require('faker');
  // const times = require("lodash.times");
  // const random = require("lodash.random");

  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.hasMany(models.Status);
  };
  // Task.sync({force:true}).then(()=>
  // {
      // Task.bulkCreate(times(10, () =>({
          // name: `${faker.name.firstName()}`,
          // description: `${faker.lorem.sentence()}`,
          // user: `${faker.name.findName}`,
          // user: `${faker.random.word(10)}`
      // })))
  // })
  return Task;
};