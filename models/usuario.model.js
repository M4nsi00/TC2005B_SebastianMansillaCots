const usuarios = [
    {
        nombre: "Sebastián",
        id_usuario: "001",
        fecha: "02-03-2026"
    }
];

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_id_usuario, mi_fecha) {
        this.nombre = mi_nombre;
        this.id_usuario = mi_id_usuario;
        this.fecha = mi_fecha;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        usuarios.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return usuarios;
    }

}