// manejando datos de tipo "texto"
// alert('Yo tengo 30 años')
// console.log(4 / 4)

// manejando números
// alert(123)

// Para crear una cajita (variable) no puedes iniciar con
// caracteres especiales, puedes iniciar con guión bajo, con texto, pero no
// con número y no puede tener espacios tu nombre de la variable
// let es para crear una cajita (variable) que cambia su valor con el tiempo
let examen1 = 20
let examen2 = 17
let examen3 = 13
let examen4 = 19
console.log((examen1 + examen2 + examen3 + examen4) / 4)

// const crea una cajita que no cambia nunca el valor que tiene dentro
const PI = 3.1416
console.log(PI)
// console.log(salarioMinimo)

let edadMinima = 18
let miEdad = 18

// si...
if (miEdad > edadMinima) { // esto ocurre si la condición es verdad
    console.log("Puedes ingresar")
}
// sino si
else if (miEdad == 18) {
    console.log("Tienes exactamente 18, espera un añito más")
}
// sino
else {
    console.log("No eres mayor de edad")
}

// -------------------------------------------------------
let termineEscuela = false
let edadPersona = 19

if (termineEscuela == true || edadPersona >= 18) {
    console.log("Puedes ingresar a la discoteca")
}

// --------------------- switch (segun)
let pedido = "pizza"

switch (pedido) {
    // if(pedido == "pizza") { console.log("He pedido pizza") }
    case "pizza": console.log("He pedido pizza")
    // if(pedido == "tacos")
    case "tacos": console.log("He pedido tacos")
    // if(pedido == "sushi")
    case "sushi": console.log("He pedido sushi")
    default: console.log("Lo siento, lo que pides no está en el menú")
}

// ----------------
let fruta // undefined por omisión (nos hemos olvidado de asignarle un valor)
console.log(fruta)

let hola = null
console.log(hola)

// console.log(avion)

// ------------------------------------------
for (let plato = 10; plato > 0; plato--) {
    console.log("He repartido el plato número " + plato)
}

// Usando for me gustaría ver los números pares hasta el 10
for (let i = 0; i <= 10; i += 2) {
    console.log("El numero es:" + i)
}

// se necesita obtener los números que sean divisibles entre 5
for (let i = 1; i <= 50; i++) {
    if (!(i % 5 == 0)) {
        console.log(i)
    }
}

// -------------------------------
let hambre = true
let piezas = 0

while (hambre) {
    piezas++
    console.log("comí la pieza numero " + piezas)

    if (piezas == 4) {
        hambre = false // ya estoy lleno
    }
}

// ---------------
let i = 1
while (i <= 5) {
    console.log(i)
    i++
}

// 

let intentos = 2
do {
    intentos++
    console.log("Este es mi " + intentos + " intento probando el plato")
} while (intentos < 1)


// Operador Ternario
let edad = 30

if (edad > 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")
// edad > 18 ? if : else