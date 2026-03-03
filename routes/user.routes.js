const express = require('express');
const router = express.Router();

router.get('/login');
router.post('/login');
router.get('/logout');

module.exports = router;