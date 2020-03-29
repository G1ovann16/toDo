'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTask = sequelize.define('UserTask', {
    UserId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {});
  UserTask.associate = function(models) {
    // associations can be defined here
  };
  return UserTask;
};