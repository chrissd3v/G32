// Manejo del DOM
document.getElementById("cajita").style.color = "rgb(133, 228, 133)"
document.getElementById("cajita").style.backgroundColor = "crimson"

// -------------------------------------------------------
// function botonClick() {
//   alert('Me has dado click')
// }
// document.getElementById("boton").addEventListener('click', botonClick)

document.getElementById("boton").addEventListener('click',  () => {
  alert('Me has dado click')
})

document.getElementById("modoOscuro").addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = "#1a1a1a"
})
document.getElementById("modoClaro").addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = "white"
})
document.querySelector("#alternarModo").addEventListener('click', () => {
  document.querySelector('body').classList.toggle('darkmode')
})



function sumar() {
    // 1. Obtener los valores de los inputs por su ID
    const valor1 = document.getElementById('num1').value;
    const valor2 = document.getElementById('num2').value;

    // 2. Convertir los valores a números (y usar 0 si están vacíos)
    const n1 = parseFloat(valor1) || 0;
    const n2 = parseFloat(valor2) || 0;

    // 3. Realizar la suma
    const total = n1 + n2;

    // 4. Mostrar el resultado en el elemento <p>
    document.getElementById('resultado').innerText = `Resultado: ${total}`;
}

// -------------------------------------------------------------

const input = document.getElementById('username')
const boton = document.getElementById('send')

boton.addEventListener('click', () => {
    document.getElementById('texto').textContent = input.value
})

const colores = ['red', "green", "cyan"]
let color = 0

document.getElementById('changeColor').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = colores[color]
    color++

    if (color == 3) {
        color = 0
    }
})



// --------------------------------------------------------------
const edad = prompt("Ingresa tu edad")

console.log(isNaN(edad))

if (!isNaN(edad)) {
    alert(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad")
} else {
    alert("Ingresa una edad válida")
}