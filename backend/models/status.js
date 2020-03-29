'use strict';
module.exports = (sequelize, DataTypes) => {

  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    register: DataTypes.STRING
  }, {});
  Status.associate = function (models) {
    // associations can be defined here
    Status.belongsTo(models.Task);
  };


  return Status;
};