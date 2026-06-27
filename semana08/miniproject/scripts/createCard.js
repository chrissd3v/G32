// export function createCard (product) {
//   const card = document.createElement('div')
  
//   // Contenido del card
//   const img = document.createElement('img')
//   img.src = product.thumbnail

//   const paragraph = document.createElement('p')
//   paragraph.textContent = product.title
//   paragraph.classList.add('productCard')

//   const divFlex = document.createElement('div')
//   divFlex.appendChild(title)
//   divFlex.appendChild(category)

//   // Agregando todos los hijos al card
//   card.appendChild(img)
//   card.appendChild(paragraph)
//   card.appendChild(divFlex)

//   document.querySelector('body').appendChild(paragraph)
// }

export function createCard(product) {
  const card = document.createElement('div')

  // Contenido del card
  const img = document.createElement('img')
  img.src = product.thumbnail

  const productName = document.createElement('p')
  productName.textContent = product.title
  productName.href = './pages/product.html?' + product.id
  // query params

  // agregando todos los hijos al card
  card.appendChild(img)
  card.appendChild(productName)

  document.querySelector('body').appendChild(card)
}