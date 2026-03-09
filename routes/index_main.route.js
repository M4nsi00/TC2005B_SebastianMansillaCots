const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const indexController = require('../controllers/index_main.controller');

router.get('/', isAuth, indexController.get_index);
router.get('/referencias', isAuth, indexController.get_referencias);
router.get('/labs', isAuth, indexController.get_labs);

module.exports = router;