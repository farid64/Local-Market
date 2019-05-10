const Sequelize = require('sequelize');

const sequelize = require('../config/connection');
const Customer = require('./customer_model');

const Transaction = sequelize.define(
  'Transaction',
  {
    transaction_date: {
      type: Sequelize.DATE
    },
    amount: {
      type: Sequelize.DECIMAL(20, 2)
    },
    transaction_type: {
      type: Sequelize.ENUM(
        'MONEY_TRANSFER',
        'MONEY_ORDER',
        'CHECK_CASHING',
        'ATM',
        'EBT',
        'CASH_IN',
        'CASH_OUT',
        'BILL_PAYMENT',
        'RECEIVE_MONEY',
        'OTHER_SALE'
      )
    },
    transaction_category: {
      type: Sequelize.STRING
    },
    details: {
      type: Sequelize.JSON
    }
  },
  {
    underscored: true,
    freezeTableName: true,
    tableName: 'transaction',
    timestamps: true
  }
);

Transaction.belongsTo(Customer);

Transaction.sync();

module.exports = Transaction;
