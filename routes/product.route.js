const express = require('express');

const controller = require('../controllers/product.controller');

const router = express.Router();

// request data from resource, localhost:3000/products
router.get('/', controller.index);


module.exports = router;
