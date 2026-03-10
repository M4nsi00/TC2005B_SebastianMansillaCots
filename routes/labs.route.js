const express = require('express');
const router = express.Router();

const labsController = require('../controllers/labs.controller');

router.get('/lab1',labsController.get_lab1);
router.get('/lab3',labsController.get_lab3);
router.get('/lab4',labsController.get_lab4);
router.get('/lab4_preguntas',labsController.get_lab4_preguntas);
router.get('/lab5',labsController.get_lab5);
router.get('/lab6',labsController.get_lab6);
router.get('/lab6_preguntas',labsController.get_lab6_preguntas);
router.get('/lab11',labsController.get_lab11);
router.get('/lab12',labsController.get_lab12);
router.get('/lab13',labsController.get_lab13);
router.get('/lab13/new',labsController.get_lab13_new);
router.post('/lab13/new',labsController.post_lab13);
router.get('/lab13/:id', labsController.get_lab13);
router.get('/lab17',labsController.get_lab17);

module.exports = router;