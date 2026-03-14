//Privis controller


module.exports = (PriviBuscar) => {
	return (req, res, next) => {
    let continuar = true;
    for (let privilegio of req.session.privilegios) {
    	console.log(`Buscando: ${PriviBuscar}, Tienes: ${privilegio}`)
        if (privilegio.nombre == PriviBuscar) {
            next();
            continuar = false;
        }
    }
    if (continuar) {
    	console.log("Hey hey no tienes permiso de estar aqui")
        req.session.error = "No tienes privilegios para este recurso, el incidente ha sido reportado.";
        return res.redirect('/users/login');
    }
};

};
	

	