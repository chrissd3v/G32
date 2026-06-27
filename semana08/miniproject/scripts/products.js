// Forma 1
// fetch('https://dummyjson.com/products')
//   .then(res => res.json())
//   .then(console.log)
//   .catch((error) => alert(error))

import { logout, redirectLogin } from './authGuard.js'
import { createCard } from "./createCard.js"

// Forma 2
// async function getProducts() {
//   try {
//     const peticion = await fetch('https://dummyjson.com/products')
//     const pizza = await peticion.json()
//     console.log(pizza)
//   } catch (error) {}
  
// }

// getProducts()

redirectLogin()

const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logout)


async function getProducts() {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  // console.log(data.products)
  
  return data.products
}

const render = async () => {
  const products = await getProducts()

  products.forEach((p) => {
    createCard(p)
  })
  // console.log(products)
}

render()