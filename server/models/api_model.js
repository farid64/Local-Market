const Sequelize = require('sequelize');

const sequelize = require('../config/connection');

const Customer = sequelize.define(
  'customer',
  {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

Customer.sync();

module.exports = Customer;
