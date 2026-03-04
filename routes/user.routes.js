const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users.controllers');

router.get('/login', usersControllers.get_login);
router.post('/login', usersControllers.post_login);
router.get('/logout', usersControllers.get_logout);

module.exports = router;