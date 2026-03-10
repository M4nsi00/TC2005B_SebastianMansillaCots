const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users.controllers');

router.get('/login', usersControllers.get_login);
router.post('/login', usersControllers.post_login);
router.get('/logout', usersControllers.get_logout);
router.get('/signup', usersControllers.get_signup);
router.post('/signup', usersControllers.post_signup);

module.exports = router;