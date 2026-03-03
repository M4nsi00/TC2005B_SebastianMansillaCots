const express = require('express');
const router = express.Router();

const html_head = `
<!DOCTYPE html>
<html lang="es" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <title>Laboratorios</title>
</head>
`

const html_body = `
<body>
<div class="text-center mt-5 mb-5">
    <h1 class="display-4 fw-bold">Laboratorio 11</h1>
    <p class="lead text-muted">Express</p>
    <hr class="w-25 mx-auto">
</div>

<div class="row justify-content-center">
    <div class="col-md-10 col-lg-8">
        <article class="content">
            <section class="mb-5 shadow p-4 rounded bg-body-tertiary border-top border-4 border-info">
                <h3 class="h4 text-info mb-4">Archivo package.json</h3>
                <p><strong>Package.json</strong> es el gestor central que usamos con express que nos ayuda a gestionar las distintas
                configuraciones y dependencias que usamos, como lo es el body-parser o cosas por el estilo. Algo tambien muy útil de esto
                es cuando se trabaja en equipo ya que si se sube a un repositorio el proyecto no tiene node_nodules entonces no tiene las librerias
                necesarias, pero el package.json sabe que librerias usa , de forma que si alguien descarga el proyecto solo tiene que pasar un npm install
                y ya se descarga todo.</p>
            </section>
        </article>
    </div>
</div>
</body>
`
const html_footer = `
    <footer>
        <p>Se utilizo el editor Visual Studio Code para hacer el laboratorio</p>
        <div class="btn-group" role="group" aria-label="Referencias">
            <a href="https://code.visualstudio.com/"><button type="button" class="btn btn-primary">visual studio code</button></a>
            <br>
            <a href="referencias_labs.html"><button type="button" class="btn btn-primary">Referencias</button></a>
        </div>
    </div>
</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
</body>
</html>`

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
    res.render('preguntas_labs/lab6_preguntas')
})

router.get('/lab11/new',(req,res) =>{
    const htlm_form = `
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 card shadow p-4">
            <h2 class="text-primary mb-4 text-center">Registrar Nuevo Usuario</h2>
            <form action="/labs/lab11/new" method="POST">
                <div class="mb-3">
                    <label class="form-label fw-bold">Nombre Completo</label>
                    <input name="nombre" type="text" class="form-control" placeholder="Ej. Sebastian" required>
                </div>
                <div class="mb-3">
                    <label class="form-label fw-bold">ID de Usuario</label>
                <input name="id_usuario" type="number" class="form-control" placeholder="Ej. 12345" required>
                </div>
                <div class="mb-3">
                    <label class="form-label fw-bold">Fecha de Registro</label>
                    <input name="fecha" type="date" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Guardar en Base de Datos</button>
            </form>
            </div>
        </div>
    </div>
`;

    res.send(html_head + htlm_form + html_footer);
});

router.post('/lab11/new', (req,res) =>{
    console.log(req.body);
    usuarios.push(req.body);
    res.redirect('/labs/lab11')
});

router.get('/lab11',(req,res) =>{
    let html_index = `
    <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h2">Recuadro de Nuevos Usuarios</h1>
                <a href="/labs/lab11/new" class="btn btn-success">+ Nuevo Registro</a>
            </div>
            <div class="row g-4">`;

            for (let u of usuarios) {
            html_index += `
                <div class="col-md-4">
                    <div class="card h-100 border-primary shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-primary">ID: ${u.id_usuario}</h5>
                            <p class="card-text"><strong>Usuario:</strong> ${u.nombre}</p>
                        </div>
                        <div class="card-footer text-muted small">
                            Registrado el: ${u.fecha}
                        </div>
                    </div>
                </div>`;
            }
            html_index += `</div></div>`;

            res.write(html_head + html_body + html_index + html_footer);
});

module.exports = router;