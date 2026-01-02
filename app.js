//open-clos-verify//
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
//error-input-part//
const submitBtn = document.getElementById("submitBtn");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const errorinput = document.getElementById("errorinput");

submitBtn.addEventListener("click", () => {
    let isValid = true;
    if (input1.value.trim() === "" ) {
        error1.textContent = "please enter your email!";
    error1.style.display = "block";
    isValid = false;
    }else {
        error1.style.display = "none";
    }
    if (input2.value.trim() === "") {
        error2.textContent = "please enter your password!";
          error2.style.display = "block";
    isValid = false;
    }else {
        error2.style.display = "none";        
    }
    if (isValid) {
        alert("hello world");
    }
})

