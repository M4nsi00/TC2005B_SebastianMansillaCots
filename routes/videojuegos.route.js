const express = require('express');
const router = express.Router();

const videojuegosController = require('../controlllers/videojuegos.controllers')

router.get('/new', videojuegosController.get_new);
router.post('/new', videojuegosController.post_new);
router.get('/old', videojuegosController.get_old);
router.use(videojuegosController.get_list);

module.exports = router;