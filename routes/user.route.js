const express = require('express');

var controller = require('../controllers/user.controller');
 
const router = express.Router();

// request data from resource, localhost:3000/users
router.get('/', controller.index);

// request data from resource, localhost:3000/users/search
router.get('/search', controller.search);

// request data from resource, localhost:3000/users/create
router.get('/create', controller.create);

// request data from resource, localhost:3000/users/id
router.get('/:id', controller.get);


router.post('/create', controller.postCreate);

module.exports = router;
