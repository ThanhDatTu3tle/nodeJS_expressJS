const express = require('express');

const controller = require('../controllers/auth.controller');

const router = express.Router();

// request data from resource, localhost:3000/users
router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;
