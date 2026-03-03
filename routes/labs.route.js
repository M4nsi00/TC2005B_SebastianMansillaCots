const express = require('express');
const router = express.Router();

const usuarios = [
    {
        nombre: "Sebastián",
        id_usuario: "001",
        fecha: "02-03-2026"
    }
];

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
    res.render('preguntas_labs/lab6_preguntas');
})

router.get('/lab11',(req,res) =>{
    res.render('preguntas_labs/lab11');
});

router.get('/lab12', (req,res) =>{
    res.render('preguntas_labs/lab12', {usuarios: usuarios});
});

router.get('/lab12/new',(req,res) =>{
    res.render('new');
});

router.post('/lab12/new', (req,res) =>{
    console.log(req.body);
    usuarios.push(req.body);
    res.redirect('/labs/lab12')
});

module.exports = router;