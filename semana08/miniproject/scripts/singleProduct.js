import { redirectLogin } from './authGuard.js'

redirectLogin()

const params = new URLSearchParams(location.search)
// location.search es la ruta en la que
// te encuentras actualmente

const id = params.get('id')

const llenarDato = (id, content) => {
  document.getElementById(id).textContent = content
}

fetch('https://dummyjson.com/products/' + id)
  .then(res => res.json())
  .then(data => {
    document.getElementById('productImage').src = data.thumbnail

    llenarDato('productName', data.title)
    llenarDato('description', data.description)
    llenarDato('category', data.category)
    llenarDato('price', data.price)
  })