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

const test = [
    [1, -2, 0, 4, -5],
    [0, 0, 0, 10, -10],
    [-1, -2, -3, -4, -5],
    [5, 15, 25, 0]];

const leerarreglos = (test) => {
    for(let i = 0; i<test.length;i++){
        contador(test[i]);
    }
}

leerarreglos(test);

const calcularPromedios = (matriz) =>{
    for(let i = 0; i < matriz.length; i++){
        let sumaArreglo = 0;
        let arregloActual = matriz[i];

        for(let i = 0; i < arregloActual.length; i++){
            sumaArreglo += arregloActual[i];
        }

        let promedioArreglo = sumaArreglo/arregloActual.length;

        console.log("El promedio del arreglo " + i + " es: " + promedioArreglo);
    }
}

matrizEjercicio = [
    [10, 10, 10],
    [20, 50, 80],
    [1, 2, 3, 4, 5]
]

calcularPromedios(matrizEjercicio);

const bizarro = (numero) => {
    let inverso = numero.toString()
    .split("")
    .reverse()
    .join("");

    console.log(inverso);
}

const bizarrin = parseInt(prompt("Ingresa un numero de al menos 5 digitos"));
bizarro(bizarrin);

//Calculadora de velocidad y distancia de un movimiento uniforme rectilineo
class Movimiento {
    constructor(vInicial, aceleracion, tiempo){
        this.vInicial = parseFloat(vInicial);
        this.aceleracion = parseFloat(aceleracion);
        this.tiempo = parseFloat(tiempo);
    }

    //Formula para calcular velocidad:  v = v0 + at
    calcularVelocidadInicial(){
        return this.vInicial + (this.aceleracion*this.tiempo);
    }

    //Formula para calcular distancia: v0*t + (at^2)/2
    calcularDistancia(){
        return (this.vInicial * this.tiempo) + (0.5 * this.aceleracion * Math.pow(this.tiempo,2));
    }

}

const calculadoraFisica = () =>{
    alert("Bienvenido al simulador de Movimiento Rectilinieo Uniforme, añade una velocidad inicial, aceleración y tiempo para calcular velocidad y distancia")

    const vi = parseFloat(prompt("Ingresa una velocidad inicial (m/s) " , "0"));
    const a = parseFloat(prompt("Ingrese una aceleración (m/s^2) ", "9.8"));
    const t = parseFloat(prompt("Ingrese un tiempo s " , "5"));

    //Crear objeto
    const calculo = new Movimiento(vi,a,t);
    //Calculos
    const vFinal = calculo.calcularVelocidadInicial();
    const distancia = calculo.calcularDistancia();

    console.log("La velocidad final del problema es de: " + vFinal);
    console.log("La distancia final del problema es de: " + distancia);
}

calculadoraFisica()