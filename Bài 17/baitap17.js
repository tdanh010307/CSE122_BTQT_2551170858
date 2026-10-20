function validateForm() {
    let isValid = true;
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let fullnameInput = document.getElementById("fullname");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");

    if (fullname == "") {
        setError(fullnameInput, "fullnameError", "fullnameSuccess");
        isValid = false;
    }
    else {
        setSuccess(fullnameInput, "fullnameError", "fullnameSuccess");
    }

    let emailPatten = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPatten.test(email)) {
        setError(emailInput, "emailError", "emailSuccess");
        isValid = false;
    }
    else {
        setSuccess(passwordInput, "passwordError", "passwordSuccess");
    }


    if (password.length < 6) {
        setError(passwordInput, "passwordError", "passwordSuccess");
        isValid = false;
    }
    else {
        setSuccess(passwordInput, "passwordError", "passwordSuccess");
    }

    if (confirmPassword !== password || confirmPassword === "") {
        setError(confirmPasswordInput, "confirmPasswordError", "confirmPasswordSuccess");
        isValid = false;
    }
    else {
        setSuccess(confirmPasswordInput, "confirmPasswordError", "confirmPasswordSuccess");
    }
    return isValid;
}

function setError(inputElement, errorId, successId) {
    inputElement.classList.add("error");
    inputElement.classList.remove("success");
    document.getElementById(errorId).style.display = "block";
    document.getElementById(successId).style.display = "none";
}
function setSuccess(inputElement, errorId, successId) {
    inputElement.classList.add("success");
    inputElement.classList.remove("error");
    document.getElementById(successId).style.display = "block";
    document.getElementById(errorId).style.display = "none";
}