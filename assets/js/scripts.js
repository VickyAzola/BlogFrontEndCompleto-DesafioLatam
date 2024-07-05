const form = document.getElementById("form")
const email = document.getElementById("email")
const google = document.getElementById("googleBtn")
const forgotPassword = document.getElementById("forgotPassword")
const register = document.getElementById("register")

form.addEventListener("submit", function () {
  alert(`Bienvenido ${email.value}`)
})

google.addEventListener("click", function () {
  alert("Te estamos redirigiendo...")
})

forgotPassword.addEventListener("click", function () {
  alert("Que mal... nosotros también")
})

register.addEventListener("click", function () {
  alert("Aun no hay nada aqui...")
})