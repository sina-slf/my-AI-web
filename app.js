const verify = document.getElementById("verify-onk")
const form = document.getElementById("form-ver")
const sine = document.getElementById("verify-sign-in")
const backsinein = document.getElementById("back-sign-in")
const btnback = document.getElementById("btn-nav-sign")

verify.onclick = function() {
     form.style.display = "none"
     sine.style.display = "block"
}
backsinein.onclick = function() {
    form.style.display = "block"
    sine.style.display = "none"
}
btnback.onclick = function() {
    sine.style.display = "none"
}
