const express = require('express');
const router = express.Router();

const root_controller = require('../controllers/root_controller');

router.get('/', root_controller.index);

module.exports = router;
