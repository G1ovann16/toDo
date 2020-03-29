'use strict';
module.exports = (sequelize, DataTypes) => {
  const userTask = sequelize.define('userTask', {
    UserId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {});
  userTask.associate = function(models) {
    // associations can be defined here
  };
  return userTask;
};