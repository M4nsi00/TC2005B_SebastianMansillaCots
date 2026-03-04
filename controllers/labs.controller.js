const Usuario = require('../models/usuario.model');
const paths = require('path');

exports.get_lab1 = ('/lab1',(req,res) =>{
    res.render('preguntas_labs/lab1');
});
exports.get_lab3 = ('/lab3',(req,res) =>{
    res.render('preguntas_labs/lab3');
});
exports.get_lab4 = ('/lab4',(req,res) =>{
    res.render('preguntas_labs/lab4');
});
exports.get_lab4_preguntas = ('/lab4_preguntas',(req,res) =>{
    res.render('preguntas_labs/lab4_preguntas');
});
exports.get_lab5 = ('/lab5',(req,res) =>{
    res.render('preguntas_labs/lab5');
});
exports.get_lab6 = ('/lab6',(req,res) =>{
    res.render('preguntas_labs/lab6');
});
exports.get_lab6_preguntas = ('/lab6_preguntas',(req,res) =>{
    res.render('preguntas_labs/lab6_preguntas');
})
exports.get_lab11 = ('/lab11',(req,res) =>{
    res.render('preguntas_labs/lab11');
});
exports.get_lab12 = ('/lab12', (req,res) =>{
    res.render('preguntas_labs/lab12');
});
exports.get_lab13_new = ('/lab13/new',(req,res) =>{
    res.render('new' ,{
        username: req.session.username || "",
    });
});
exports.post_lab13 = ('/lab13/new', (req,res) =>{
    console.log(req.body);
    const usuario = new Usuario(req.body.nombre, req.body.id_usuario, req.body.fecha);
    console.log(usuario);
    usuario.save();
    res.setHeader('Set-Cookie', `ultimo_usuario=${usuario.nombre}; Secure`);
    res.redirect('/labs/lab13')
});
exports.get_lab13 = ('/lab13', (req,res) =>{
    console.log(req.get('Cookie'))
    res.render('preguntas_labs/lab13', {
        username: req.session.username || "",
        usuarios: Usuario.fetchAll(),
    });
});
