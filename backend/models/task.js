'use strict';
module.exports = (sequelize, DataTypes) => {
  // const faker = require('faker');
  // const times = require("lodash.times");
  // const random = require("lodash.random");

  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.STRING,
    statusId: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.hasMany(models.Status);
    Task.belongsToMany(models.Category,{
      through: models.TaskCategory
    })
    Task.belongsToMany(models.User,{
      through: models.UserTask
    })
  };
  return Task;
};