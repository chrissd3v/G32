import { verificarEdad } from "./sample.js";
import { sumar, restar, multiplicar, dividir, potencia } from "./operations.js";

// const edad = document.getElementById('edad')
// const button = document.querySelector('#verificar')

// button.addEventListener('click', () => {
//   verificarEdad(edad.value)
// })

const num1 = document.getElementById('n1')
const num2 = document.getElementById('n2')
const button1 = document.querySelector('#sumar')
const button2 = document.querySelector('#restar')
const button3 = document.querySelector('#multiplicar')
const button4 = document.querySelector('#dividir')
const button5 = document.querySelector('#potencia')
const resultado = document.getElementById('resultado')

button1.addEventListener('click', () => {
  sumar(Number(num1.value), Number(num2.value))
})
button2.addEventListener('click', () => {
  restar(Number(num1.value), Number(num2.value))
})
button3.addEventListener('click', () => {
  multiplicar(Number(num1.value), Number(num2.value))
})
button4.addEventListener('click', () => {
  dividir(Number(num1.value), Number(num2.value))
})

button5.addEventListener('click', () => {
  potencia()
})

