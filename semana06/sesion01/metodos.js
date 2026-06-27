let nombre = "Ana"
console.log(nombre.toUpperCase())

let frase = "HOY PERU GANA"
console.log(frase.toLowerCase())

console.log(frase.length)

let frase2 = ' esta es una frase '
console.log(frase2.trim())

//Verificar si existe una palabra dentro del string
let frase3 = 'Bienvenidos a Javascript'
console.log(frase3.includes("eeeee"))

let fraseParaOlvidarla = 'Una ves recibí un consejo que decía "Para olvidarla..." que fue de mi amigo'
console.log(fraseParaOlvidarla)

//slice para sacar una porcion del texto
console.log(fraseParaOlvidarla.slice(0, 10))

//Necesita reemplazar un texto con tro
console.log(fraseParaOlvidarla.replace('olvidarla', 'consquitarla'))

// split - Separa una cadena de texto y la convierte
//en un arreglo mediante un "delimitador"
//split busca en el texto donde estee el caracter que
//tu le indiques, por cada vez que lo encuentre
//creará un item dentro de tu cajita que es tu arreglo
let csv = 'Ana, Luis, Carlos, Pepe'
console.log(csv.split(","))

//me gustaría saber si un texto inicia o termina
//con cierta palabra o frasae
let frase4 = 'Hay 28 alumnos presentes'
console.log(frase4.startsWith('Hay'))
console.log(frase4.endsWith('presentes'))

//----------------------NUMEROS----------------------
let precio = 15.123879
// redondea los decimales
console.log(precio.toFixed(3))

// convertir un numero a texto
console.log("15.123879")

let pozoGanador = 1000000
console.log(pozoGanador.toLocaleString())

// verificar si algo No es un numero
console.log(Number.isNaN("25"))
// NaN - Not a Number

// --------------------------
// Arreglo / Array
let frutas = ["fresa", 123, "lima", "mandarina", "limon"]

// agregando un item (ultimo)
frutas.push("maracuyá")
console.log(frutas)

// agregando un item (primero)
frutas.unshift("cereza")
console.log(frutas)
// fresa, naranja, mandarina, limon,

// eliminando frutas (ultimo)
frutas.pop()
console.log(frutas)

// eliminando frutas (primero)
frutas.shift()
console.log(frutas)

// revertir un arreglo
frutas.reverse()
console.log(frutas)

// convertir un arreglo a string
// juntando cada item con algún caracter
console.log(frutas.join(','))

// console.log(frutas[(frutas.length / 2).toFixed(0) - 1])

const nombres = ["pepe", "ana", "juan", "maria"]


for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase())
}

console.log("---------------------")

nombres.forEach((nombre) => {
    if (nombre == "ana") {
        console.log(nombre.toUpperCase())
    }
})

nombres = 123
