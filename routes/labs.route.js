const express = require('express');
const router = express.Router();

router.get('/lab1',(req,res) =>{
    res.render('preguntas_labs/lab1');
});

router.get('/lab3',(req,res) =>{
    res.render('preguntas_labs/lab3');
});

router.get('/lab4',(req,res) =>{
    res.render('preguntas_labs/lab4');
});

router.get('/lab4_preguntas',(req,res) =>{
    res.render('preguntas_labs/lab4_preguntas');
});

router.get('/lab5',(req,res) =>{
    res.render('preguntas_labs/lab5');
});

router.get('/lab6',(req,res) =>{
    res.render('preguntas_labs/lab6');
});

router.get('/lab6_preguntas',(req,res) =>{
    res.render('preguntas_labs/lab6_preguntas')
})

router.get('/lab10',(req,res) =>{
    res.render('preguntas_labs/lab10');
});

router.get('/lab11',(req,res) =>{
    res.render('preguntas_labs/lab11');
});

module.exports = router;