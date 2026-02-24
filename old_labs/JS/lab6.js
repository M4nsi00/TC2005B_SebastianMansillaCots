//Traer valores mediantes ID

const heading = document.getElementById("welcomeHeading");
const nameInput = document.getElementById("username-input");
const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");
const matchMessage = document.getElementById("matchMessage");
const btnSubir = document.getElementById("btnSubir");
const temaC = document.getElementById("cambiaTemas");
const errorMessage = document.getElementById("errorMessage");

/*Saludo dinamico
Vi un video que implementaba este saludo y me parecio divertido como practica
*/
nameInput.addEventListener("input",function(e){
    heading.innerText = e.target.value + " ingresa tu contraseña y validala";
});

const validarContraseñas = () =>{
    if(pw1.value===pw2.value && pw1.value !== ""){
        pw2.classList.remove('is-invalid');
        pw2.classList.add('is-valid');
        matchMessage.innerText = "Contraseñas coinciden";
    } else{
        pw2.classList.remove('is-valid');
        pw2.classList.add('is-invalid');
        matchMessage.innerText = "Contraseñas no coinciden";
    }
}

//Mostrar ocultar contraseña
pw1.addEventListener("input",validarContraseñas);
pw2.addEventListener("input", validarContraseñas);

function mostrarPW1(){
    const tipo = document.getElementById("pw1");
    const icon = document.getElementById("pw1icon");
    if(tipo.type == 'password'){
        tipo.type = 'text';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    } else{
        tipo.type = 'password';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    }
}
function mostrarPW2(){
    const tipo = document.getElementById("pw2")
    const icon = document.getElementById("pw2icon");

    if(tipo.type == 'password'){
        tipo.type = 'text';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    } else{
        tipo.type = 'password';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    }
}

//Redirigir al validar contraseña
btnSubir.addEventListener('click', () => {
    if(pw1.value===pw2.value && pw1.value !== ""){
        window.location.href = "/HTML/New_Core/Lab 0-7/HTML/preguntasLab6.html";
    } else {
        document.getElementById('errorMessage').style.display = "block";
    }
})

temaC.addEventListener('click', () => {
    const body = document.documentElement;
    
    if (body.getAttribute('data-bs-theme') === 'dark') {
        body.setAttribute('data-bs-theme', 'light');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
    }
});