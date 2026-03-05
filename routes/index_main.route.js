const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_main.controller');

router.get('/', indexController.get_index);
router.get('/referencias', indexController.get_referencias);
router.get('/labs', indexController.get_labs);

module.exports = router;