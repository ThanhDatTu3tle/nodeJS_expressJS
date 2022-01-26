const express = require('express');

const controller = require('../controllers/cart.controller');

const router = express.Router();

// request data from resource, localhost:3000/products
router.get('/', controller.index);

router.get('/add/:productId', controller.addToCart);

module.exports = router;