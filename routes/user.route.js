const express = require('express');

const controller = require('../controllers/user.controller');
const { requireAuth } = require('../middlewares/auth.middleware');
const validate = require('../validate/user.validate');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

// request data from resource, localhost:3000/users
router.get('/', authMiddleware.requireAuth,  controller.index);

// request data from resource, localhost:3000/users/search
router.get('/search', controller.search);

// request data from resource, localhost:3000/users/create
router.get('/create', controller.create);

// request data from resource, localhost:3000/users/id
router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;
