const Sequelize = require('sequelize');

const sequelize = new Sequelize('customer_api', 'me', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
