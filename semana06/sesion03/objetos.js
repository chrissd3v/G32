function formatearLibro(titulo) {
    const resultado = titulo.trim().split(" ").map((palabra) => palabra.slice(0, 1).toUpperCase() + palabra.slice(1)).join(" ")
    console.log(resultado)
}

const libro1 = " el señor de los anillos "
formatearLibro(libro1)

const libro2 = " fenomenología de la ansiedad "
formatearLibro(libro2)

// Ejercicio 2
// 2. Objetos + Arreglos
// El hospital tiene un arreglo de medicamentos por nombre, precio y disponibilidad.
// Crea una función que devuelva, en un solo arreglo, los nombres de los medicamentos que cuestan
// menos de 50 soles y están disponibles en la farmacia.
const medicamentos = [
    { nombre: "Paracetamol", precio: 14, disponible: true },
    { nombre: "Amoxicilina", precio: 60, disponible: true },
    { nombre: "Ibuprofeno", precio: 25, disponible: false },
    { nombre: "Loratadina", precio: 30, disponible: true }
]

// ["Paracetamol", "Loratadina"]
// Solución 1 - forEach
let nuevoArray = []

function devulve(arreglo) {
    arreglo.forEach((medicamento) => {
        if (medicamento.precio < 50 && medicamento.disponible == true) {
            nuevoArray.push(medicamento.nombre)
        }
    })

    console.log(nuevoArray)
}

devulve(medicamentos)

// Solución 2 - con métodos (filter + map)
const verdadesPrecio = medicamentos.filter((v) => v.disponible === true && v.precio < 50).map((v) => v.nombre)

// Ejercicio 3
// 3. Arreglos
// Una tienda tiene un arreglo con los precios de los productos.
// Hay una nueva promoción, todo lo que cuesta más de 100 soles tiene un 10% de descuento.
// Crea una función que devuelva un nuevo arreglo solo con los precios de esos productos,
// ya con el descuento aplicado.
const preciosTienda = [50, 120, 80, 200, 95, 150]
// [108, 180, 135]

// Solución 1
function promocion(precios) {
    return precios.filter(precio => precio > 100).map(precio => precio - (precio * 0.10));
}

// Solución 2
const nuevoArray2 = []
function precioNuevo(p) {
    p.forEach((precio) => {
        if (precio > 100) {
            nuevoArray2.push(precio * 0.9)
        }
    })
    console.log(nuevoArray2)
}

precioNuevo(preciosTienda)

// Ejercicio 4
// Un aeropuerto registra los vuelos del día. Cada vuelo tiene la siguiente forma:
const vuelos = [
    { codigo: "lh-204", destino: "  frankfurt ", pasajeros: ["Juan", "María"], precioBase: 850, estado: "confirmado", retrasoMin: 0 },
    { codigo: "AA-118", destino: "NEW YORK", pasajeros: ["Juan", "María"], precioBase: 620, estado: "cancelado", retrasoMin: 45 },
    { codigo: "ib-305", destino: "madrid", pasajeros: ["Juan", "María"], precioBase: 700, estado: "confirmado", retrasoMin: 0 },
    { codigo: "LA-512", destino: " Santiago", pasajeros: ["Juan", "María"], precioBase: 300, estado: "confirmado", retrasoMin: 20 },
    { codigo: "KL-661", destino: "boGoTa", pasajeros: ["Juan", "María"], precioBase: 900, estado: "confirmado", retrasoMin: 0 },
]

// DOM

// Obteniendo un elemento por su Id
console.log(document.getElementById("cajita").textContent)
console.log(document.querySelector("a"))

// Obteniendo un elemento por su clase
// Crea un Arreglo de tipo HTMLCollection que contiene
// todos los elementos que tengan esa clase mencionada
console.log(document.getElementsByClassName('ejemplo'))

// Si usamos querySelector para obtener por clase
// query selector es similar a un find
// traerá la primera coincidencia
console.log(document.querySelector("div").textContent)
console.log(document.querySelectorAll(".ejemplo"))

// ----------------
document.getElementById("cajita").style.color = "rgb(133, 228, 133)"
document.getElementById("cajita").style.backgroundColor = "crimson"