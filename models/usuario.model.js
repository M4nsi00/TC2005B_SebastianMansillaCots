const db = require('../util/database');
const bcrypt = require('bcrypt');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_username, mi_password, mi_fecha_registro) {
        this.name = mi_nombre;
        this.username = mi_username;
        this.password = mi_password;
        this.fecha_registro = mi_fecha_registro;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password,12).then((password_cifrado) =>{
            return db.execute('INSERT INTO users(name, username, password, fecha_registro) VALUES(?, ?, ?, ?)',
            [this.name, this.username, password_cifrado, this.fecha_registro]);
        }).catch((error) =>{
            console.log(error);
            next (error);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    static fetchOne(username){
        return db.execute('SELECT * FROM users WHERE username = ?', [username]);
    }

    static fetch(id){
        if(id){
            return this.fetchOne(id);
        } else{
            return this.fetchAll();
        }
    }

    static getPrivis(id){
        console.log("Select a BD por los privis")
        return db.execute(
            `SELECT p.nombre FROM tiene t, Roles r, otorga o, privilegios p
            WHERE idUsuario=? AND t.idRol=r.id AND r.id=o.idRol AND idPrivilegio=p.id`, 
            [id]
            );

    }
}