const Sequelize = require('sequelize');

const sequelize = require('../config/connection');
// const Transaction = require('./transaction_model');

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

console.log('hello');

// Customer.hasMany(Transaction, { as: 'transactions', foreignKey: 'customer_id' });
// Transaction.belongsTo(Customer);

Customer.sync();

module.exports = Customer;


