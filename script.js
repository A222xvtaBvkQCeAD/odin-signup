let password = document.getElementById("password");
let lowerReq = document.getElementById("lowercase");
let upperReq = document.getElementById("capital");
let numReq = document.getElementById("number");
let lenReq = document.getElementById("length");
let confirmPassword = document.getElementById("confirm-password");

// When the user clicks on the password field, show the message box
password.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
  
// When the user clicks outside of the password field, hide the message box
password.onblur = function() {
    document.getElementById("message").style.display = "none";

    if (password.value.length == 0) {
        password.classList.remove("invalid");
    }
}

confirmPassword.onblur = function() {
    if (confirmPassword.value.length == 0) {
        confirmPassword.classList.remove("invalid");
    }
}

password.onkeyup = function() {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password.value.match(pattern)) {
        password.classList.add("invalid");
    }
    else {
        password.classList.remove("invalid");
    }

    // validate lowercase letters
    let lowerCase = /[a-z]/g;
    if (password.value.match(lowerCase)) {
        lowerReq.classList.remove("invalid");
        lowerReq.classList.add("valid");
    }
    else {
        lowerReq.classList.remove("valid");
        lowerReq.classList.add("invalid");
    }

    // validate uppercase letters
    let upperCase = /[A-Z]/g;
    if (password.value.match(upperCase)) {
        upperReq.classList.remove("invalid");
        upperReq.classList.add("valid");
    }
    else {
        upperReq.classList.remove("valid");
        upperReq.classList.add("invalid");
    }

    // validate numbers
    let digit = /\d/g;
    if (password.value.match(digit)) {
        numReq.classList.remove("invalid");
        numReq.classList.add("valid");
    }
    else {
        numReq.classList.remove("valid");
        numReq.classList.add("invalid");
    }

    // validate length
    let length = 8;
    if (password.value.length >= length) {
        lenReq.classList.remove("invalid");
        lenReq.classList.add("valid");
    }
    else {
        lenReq.classList.remove("valid");
        lenReq.classList.add("invalid");
    }
}

confirmPassword.onkeyup = function() {
    if (confirmPassword.value != password.value) {
        confirmPassword.classList.add("invalid");
    }
    else {
        confirmPassword.classList.remove("invalid");
    }
}
