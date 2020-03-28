'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    register: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
  };
  return Status;
};