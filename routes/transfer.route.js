const express = require('express');

const controller = require('../controllers/transfer.controller');

const router = express.Router();

// request data from resource, localhost:3000/products
router.get('/create', controller.create);

router.post('/create', controller.postCreate);

module.exports = router;
