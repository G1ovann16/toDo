'use strict';
module.exports = (sequelize, DataTypes) => {

  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    TaskId: DataTypes.INTEGER
  }, {});
  Status.associate = function (models) {
    // associations can be defined here
    Status.belongsTo(models.Task);
  };

  Status.sync({ force: true }).then(() => {
    Status.create(
      {
        name: "without beging",
        TaskId: 1
      },
      {
        name: "In progresed",
        TaskId: 2
      },
      {
        name: "In waiting",
        TaskId: 3
      },
      {
        name: "Finished",
        TaskId: 4
      }
    )
  })
  return Status;
};