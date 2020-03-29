'use strict';
module.exports = (sequelize, DataTypes) => {
  // const faker = require('faker');
  // const times = require("lodash.times");
  // const random = require("lodash.random");

  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // Category.belongToMany(models.Task,{
    //   through: taskcategory
    // })
    // associations can be defined here
  };
  // Category.sync({force:true}).then(()=>
  // {
  //     Category.bulkCreate(times(10, () =>({
  //         name: `${faker.name.firstName()}`,
  //         description: `${faker.lorem.sentence()}`
  //     })))
  // })
  return Category;
};