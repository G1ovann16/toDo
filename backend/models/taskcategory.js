'use strict';
module.exports = (sequelize, DataTypes) => {
  const taskCategory = sequelize.define('taskCategory', {
    CategoryId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {});
  taskCategory.associate = function(models) {
    // associations can be defined here
  };
  return taskCategory;
};