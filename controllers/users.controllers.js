const User = require('../models/usuario.model');
const bcrypt = require('bcrypt');

exports.get_login = (req, res, next) =>{
    res.render('login',{
        csrfToken: req.csrfToken(),
        error: req.session.error,
    });
};
exports.post_login = (req, res, next) =>{
    User.fetchOne(req.body.username).then(([usuarios, fieldData]) => {
    if (usuarios.length < 1){
            console.log("hola andamos no jalando")
        req.session.error = 'Usuario y/o password no coinciden';
        return res.redirect('/users/login');
    }else{
        console.log(req.body.password, usuarios[0].password);
        bcrypt.compare(req.body.password, usuarios[0].password).then((doMatch) =>{
            if(doMatch){
                //Obtener Privilegios y Roles con Model
                req.session.isLoggedIn = true;
                const idUsuario= usuarios[0].id
                console.log(`Este es mi ID:${idUsuario}`)
                User.getPrivis(idUsuario).then(([privilegios,fieldData]) => {
                   //Privis Then code 
                    req.session.privilegios = privilegios;
                    console.log(`Tus privilegios son: ${req.session.privilegios}`);
                    return req.session.save((saveError) => {
                        return res.redirect('/');
                    })  
                    
                }

                    ).catch((errorPrivis) => {
                    console.log("Error en los privis")
                    console.log(errorPrivis);
                    next(errorPrivis);
                })

            }else{
                req.session.error = 'Usuario y/o password no coinciden';
                return res.redirect('/users/login');
            }
        }).catch((error) =>{
            console.log(error);
            next (error);
        });
    }
    }).catch((error) =>{
        console.log(error);
        throw error;
    });
};
exports.get_logout = (req, res, next) =>{
    req.session.destroy(() => {
        res.redirect('/users/login');
    })
};

exports.get_signup = (req, res, next) =>{
    res.render('signup',{
        csrfToken: req.csrfToken()
    });
}

exports.post_signup = (req,res,next) => {
    const usuario = new User(req.body.name, req.body.username, req.body.password, req.body.fecha_registro);
    console.log(usuario);
    usuario.save().then(() => {
        return res.redirect('/users/login');
    }).catch((error) =>{
        console.log(error);
        throw error;
    });
}