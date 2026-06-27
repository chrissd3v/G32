import { redirectProducts } from "./authGuard.js"

redirectProducts()

const userInput = document.getElementById('user')
const passwordInput = document.querySelector('#password')
const loginBtn = document.getElementById('login')

// michaelw - michaelwpass
// emilys - emilyspass

loginBtn.addEventListener('click', () => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: userInput.value,
            password: passwordInput.value,
            expiresInMins: 30
        })
    }).then(res => res.json())
        .then(data => {
            if (data.message) {
                document.getElementById('wrongMessage').textContent = data.message
            } else {
                localStorage.setItem("token", data.accessToken)
                document.getElementById('wrongMessage').textContent = ''

                redirectProducts()
            }
        })
})