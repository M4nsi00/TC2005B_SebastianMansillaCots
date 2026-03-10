const { error } = require('console');
const Usuario = require('../models/usuario.model');
const paths = require('path');

exports.get_lab1 = ('/lab1',(req,res) =>{
    res.render('preguntas_labs/lab1',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab3 = ('/lab3',(req,res) =>{
    res.render('preguntas_labs/lab3',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab4 = ('/lab4',(req,res) =>{
    res.render('preguntas_labs/lab4',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab4_preguntas = ('/lab4_preguntas',(req,res) =>{
    res.render('preguntas_labs/lab4_preguntas',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab5 = ('/lab5',(req,res) =>{
    res.render('preguntas_labs/lab5',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab6 = ('/lab6',(req,res) =>{
    res.render('preguntas_labs/lab6',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab6_preguntas = ('/lab6_preguntas',(req,res) =>{
    res.render('preguntas_labs/lab6_preguntas',{
        csrfToken: req.csrfToken()
    });
})
exports.get_lab11 = ('/lab11',(req,res) =>{
    res.render('preguntas_labs/lab11',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab12 = ('/lab12', (req,res) =>{
    res.render('preguntas_labs/lab12',{
        csrfToken: req.csrfToken()
    });
});
exports.get_lab13_new = ('/lab13/new',(req,res) =>{
    res.render('new',{
        csrfToken: req.csrfToken()
    });
});
exports.post_lab13 = ('/lab13/new', (req,res) =>{
    const usuario = new Usuario(req.body.name, req.body.username, req.body.password, req.body.fecha_registro);
    console.log(usuario);
    usuario.save().then(() => {
        return res.redirect('/labs/lab13')
    }).catch((error) =>{
        console.log(error);
        throw error;
    });
    res.setHeader('Set-Cookie', `ultimo_usuario=${usuario.nombre}; Secure`);
});
exports.get_lab13 = ('/lab13', (req,res) =>{
    console.log(req.params.id);
    Usuario.fetch(req.params.id).then(([rows, fieldData]) => {
        return res.render('preguntas_labs/lab13', {
            csrfToken: req.csrfToken(),
            usuarios: rows,
        });
    }).catch((errror) =>{
        console.log(error);
        throw error;
    });
});

exports.get_lab17 = ('/lab17', (req,res) =>{
    res.render('preguntas_labs/lab17',{
        csrfToken: req.csrfToken(),
    });
});

exports.get_lab18 = ('/lab18', (req,res) =>{
    res.render('preguntas_labs/lab18',{
        csrfToken: req.csrfToken(),
    });
});
