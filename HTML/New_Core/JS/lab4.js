/*
// consola (log, info, warn, error, assert)
console.log("hola gamers!");
console.info("Esto es unformación");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

//Compara valores
console.assert(1 == true);

//Compara valor y tipo de dato
console.assert(1 === true);

//-------------- variables, constantes -------------

// Forma antigua de declarar variables, no se recomienda
var videojuego_1 = "Minecraft";

// Forma moderna de declarar variables:
let videojuego_2 = "Halo";

//Constantes:
const precio = 55;


// Alcance de las variables
{
    var minecraft = "5 estrellas";
    let halo = "4 estrellas";
}

//la variable manicraft sigue viviendo fuera del ámbito en el que fue declarada
console.log(minecraft);

//la línea lanza un error porque la variable halo, murió al terminar el ámbito en el que fue declarada
//console.log(halo);


//---------------------------------- alert, prompt, confirm Interaccion con el cliente
alert("Alerta");
const favorito = prompt("Juego favorito");

console.log("Tu juego favorito es " + favorito);

const ganas_jugar = confirm("¿Tienes ganas de jugar?");

if (ganas_jugar) {
    console.log("¡A jugar!");
} else {
    console.log("¡A comer!");
}

//---------------------- funciones tradicionales
function is_precio() {
    return precio;
}

console.log(is_precio());

//---------------------- funciones modernas
() => {}

/*() => {
    console.log("Quedan tres vidas");
}


//Para ejecutar funciones anonimas
const vidas = () => {
    console.log("Quedan tres vidas");
}

vidas()

//---------------------- arreglos
const videojuegos = ["Zelda Ocarina of Time"];

const jugadores = new Array();

videojuegos.push("Mario Sunshine");
videojuegos[10] = ("Hollow Knight");

//Arreglos asociativos
videojuegos["nintendo"] = "Mario Bros";

for (let i = 0; i<videojuegos.length; i++){
    console.log(videojuegos[i]);
}

//Recorrido alternativo
for (let juego in videojuegos){
    console.log(juego);
}

//---------------------- Objetos
const object = {};
const videojuego = {
    nombre: "Minecraft",
    genero: "sandbox",
    plataforma: ["pc","nintendo","xbox","playstation","movil"],
}
*/

const numero = prompt("Ingresa un numero");

const numeros = () =>{
    const tabla_num = [];
    for (let i = 1; i <= numero; i++){
        tabla_num.push({
            "Numero: ": i, "Cuadrado: ": i*i, "Cubo: ": i*i*i 
    })
    }
    console.table(tabla_num);
}

numeros()

const sumandoAndo = () =>{
    let num_a = parseInt(Math.random() * 10 + 1);
    let num_b = parseInt(Math.random() * 100 + 1);
    let resultado = num_a + num_b;

    const inicio = performance.now();
    respuesta = parseInt(prompt("¿Cuanto es " + num_a + " + " + num_b));
    const fin = performance.now();

    const tiempo_total = ((fin-inicio) / 1000)

    if(respuesta === resultado){
        console.log("Respuesta correcta, tu muy bien");
    }
    else{
        console.log("Wow a alguien le fallan sus mates");
    }

    console.log("Tu tiempo de respuesta fue de: " + tiempo_total + " segundos");
}

sumandoAndo();

const contador = (lista) =>{
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    for(let i = 0; i<lista.length; i++){
        if(lista[i]>0)
            negativos++;
        else if(lista[i]===0)
            ceros++;
        else if(lista[i]<0)
            positivos++;
    }

    console.log("Negativos: " + negativos + " Positvos: " + positivos + " Ceros: " + ceros);
}

const test = [[1, -2, 0, 4, -5],[0, 0, 0, 10, -10],[-1, -2, -3, -4, -5],[5, 15, 25, 0]];

const leerarreglos = (test) => {
    for(let i = 0; i<test.length;i++){
        contador(test[i]);
    }
}

leerarreglos(test);