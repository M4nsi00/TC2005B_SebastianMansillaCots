const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const labsController = require('../controllers/labs.controller');

router.get('/lab1', isAuth, labsController.get_lab1);
router.get('/lab3',isAuth, labsController.get_lab3);
router.get('/lab4',isAuth, labsController.get_lab4);
router.get('/lab4_preguntas',isAuth, labsController.get_lab4_preguntas);
router.get('/lab5',isAuth, labsController.get_lab5);
router.get('/lab6',isAuth, labsController.get_lab6);
router.get('/lab6_preguntas',isAuth, labsController.get_lab6_preguntas);
router.get('/lab11',isAuth, labsController.get_lab11);
router.get('/lab12',isAuth, labsController.get_lab12);
router.get('/lab13',isAuth, labsController.get_lab13);
router.get('/lab13/new',isAuth ,labsController.get_lab13_new);
router.post('/lab13/new', isAuth, labsController.post_lab13);
router.get('/lab13/:id',isAuth, labsController.get_lab13);
router.get('/lab17',isAuth,labsController.get_lab17);

module.exports = router;