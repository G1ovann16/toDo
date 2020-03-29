'use strict';
module.exports = (sequelize, DataTypes) => {
  // const faker = require('faker');
  // const times = require("lodash.times");
  // const random = require("lodash.random");

  const User = sequelize.define('User', {
    
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    direction: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // User.belongToMany(models.Task,{
    //   through: UserTask
    // })
    // associations can be defined here
  };
  // User.sync({force:true}).then(()=>
  // {
  //     User.bulkCreate(times(10, () =>({
  //         name: `${faker.name.firstName()}`,
  //         lastName: `${faker.name.lastName()}`,
  //         email: `${faker.internet.email()}`,
  //         password: `${faker.internet.password()}`,
  //         direction: `${faker.name.firstName(), faker.name.lastName()}`
  //       })))
  //     })
        return User;
     };