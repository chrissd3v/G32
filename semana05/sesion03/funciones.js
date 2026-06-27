function areaTriangulo(base, altura) {
    console.log((base * altura) / 2)
}

areaTriangulo(10, 5)
areaTriangulo(20, 100)
areaTriangulo(5, 7)
areaTriangulo(13, 4)
areaTriangulo(9, 25)

function verificarIngreso(edad) {
    if (edad >= 18) {
        console.log("Puedes ingresar")
    } else {
        console.log("No Puedes ingresar, eres menor aún")
    }
}

verificarIngreso(21)
verificarIngreso(19)
verificarIngreso(16)
verificarIngreso(13)

function calcularPrecio(precioBase, descuento) {
    const precioFinal = precioBase - (precioBase * descuento / 100)
    const ahorro = precioBase - precioFinal

    console.log("El precio final es:" + precioFinal)
    console.log("El ahorro es:" + ahorro)
}

calcularPrecio(120, 10)

function calculadoraBasica(num1, num2, operador) {
    if (operador == '+') console.log(num1 + num2)
    else if (operador == '-') console.log(num1 - num2)
    else if (operador == '*') console.log(num1 * num2)
    else if (operador == '/') {
        if (num2 == 0) {
            console.log("No puedes dividir entre 0")
        } else {
            console.log(num1 / num2)
        }
    }
    else {
        console.log("Operación invalida")
    }
}

calculadoraBasica(20, 0, '/')