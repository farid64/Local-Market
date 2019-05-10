const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/api_controller');

router.get('/', api_controller.index);
router.get('/:userId', api_controller.user);
router.post('/create', api_controller.createUser);
router.post('/users', api_controller.getUsers);
router.post('/transactions_atm', api_controller.atm);
router.post('/transactions_ebt', api_controller.ebt);
router.post('/transactions_money_order', api_controller.moneyOrder);
router.post('/transactions_receive_money', api_controller.receiveMoney);
router.post('/transactions_bill_pay', api_controller.billPay);
router.post('/transactions_cash_in', api_controller.cashIn);
router.post('/transactions_cash_out', api_controller.cashOut);
router.post('/customer_update', api_controller.customerUpdate);
module.exports = router;
