'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskCategory = sequelize.define('TaskCategory', {
    CategoryId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {});
  TaskCategory.associate = function(models) {
    // associations can be defined here
  };
  return TaskCategory;
};