const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/a');

// GET /api/orders/cart
router.get('/activity', workoutsCtrl.create);

module.exports = router;
