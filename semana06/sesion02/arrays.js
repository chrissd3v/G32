let numeros = [3, 5, 7, 1, 0, 6]
console.log(numeros.sort())
// every - todos los elementos deben de cumpler
// la condicion que se establece

let precios = [100, 95, 120, 300]
console.log(precios.every((precio) => precio >= 200))

let algunoCumple = precios.some((p) => p >= 200)

if(algunoCumple) {
  console.log('Alguno cumple')
} else {
  console.log('Ninguno cumple')
}


// ------------------------------------------
let cuidadesPeru = ['San Isidro', 'Lince', 'Miraflores', 'San Miguel', 'Barranco']

// Eliminar
cuidadesPeru.splice(1, 2)
console.log(cuidadesPeru)

// Editar/Reemplazar
cuidadesPeru.splice(1, 1, "Surco")
console.log(cuidadesPeru)

cuidadesPeru.splice(2, 1, "Ate")
console.log(cuidadesPeru)

// Agregar elementos
cuidadesPeru.splice(3, 0, "Magdalena del mar", "Lince", "Miraflores")
console.log(cuidadesPeru)

// EXTRA
cuidadesPeru.splice(1, 0, "Callao", "Lurin")
console.log(cuidadesPeru)

// Como encontrar elementos?
const edades3 = [20, 21, 19, 13, 15, 10]
// me crea un arreglo con todos los elementos
// que cumplan la condicion
console.log(edades3.filter((edad) => edad >= 16))
// me da la 1era coincidencia con la condición
console.log(edades3.find((edad) => edad >= 16))

// -----------------
// usamos map para transformar cada elemento
// nos crea un nuevo arreglo del mismo
// NO MODIFICA EL ORIGINAL
let precios2 = [100, 95, 120, 300]
console.log(precios2.map((p) => p * 0.9))

// -----------------
const producto = {
    color: "negro",
    nombre: "Teclado",
    precio: [1, 2, 3, 4, 5],
    modelo: "XL"
}

const { modelo } = producto

console.log(modelo)



// ----------------------------------
const pacientes = [
    { nombre: "Ana", edad: 72, seguro: true, turno: 8, especialidad: "cardiologia" },
    { nombre: "Luis", edad: 45, seguro: true, turno: 3, especialidad: "emergencias" },
    { nombre: "Carlos", edad: 65, seguro: false, turno: 12, especialidad: "cardiologia" },
    { nombre: "Maria", edad: 80, seguro: true, turno: 1, especialidad: "traumatologia" },
    { nombre: "Pedro", edad: 40, seguro: false, turno: 7, especialidad: "neurologia" },
    { nombre: "Luis", edad: 10, seguro: false, turno: 20, especialidad: "emergencias" },
    { nombre: "Jorge", edad: 30, seguro: false, turno: 2, especialidad: "cardiologia" }
]

// 1. Se necesita ver los pacientes que no tiene seguro
const sinSeguro = pacientes.filter((p) => p.seguro != false)

// 2. Se necesitan los pacientes que tenga seguro y ademas
// sean menores de 70 anios

// 3. Mostrar en consola un mensaje si es que hay algun
// paciente menor de edad entrando por "emergencias"

// 4. Se necesita saber quien es paciuente con el turno mas alto
let tMayor = 0
let paciente = ""

pacientes.forEach((p) => {
    if(p.turno > tMayor){
        tMayor = p.turno
        paciente = p.nombre
    }
})

console.log("El paciente " +  paciente + "es el turno mayor " + tMayor)