const Sequelize = require('sequelize');

const sequelize = require('../config/connection');

const Customer = sequelize.define(
  'Customer',
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
    underscored: true,
    freezeTableName: true,
    tableName: 'customer',
    timestamps: true
  }
);

Customer.sync();

module.exports = Customer;


