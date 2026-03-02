const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/referencias', (req, res) => {
    res.render('referencias');
});

router.get('/labs', (req, res) =>{
    res.render('preguntas_labs');
});

module.exports = router;