document.addEventListener("DOMContentLoaded", function() {
    var togglePassword = document.getElementById("togglePassword");
    var passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.querySelector("i").textContent = "visibility_off";
        } else {
            passwordInput.type = "password";
            togglePassword.querySelector("i").textContent = "visibility";
        }
    });
});

// 1. create a funcion to validate password.
// 2. the function should chect if the password contains:
//     a. start with an uppercase letter
//     b. have at least 8 characters
//     c. have at least 2 numbers
//     d. have at least 1 special characters
// 3. create a function to handle the form submission which checks if the password conditions are met and if not displays
//    the password requirements.

function validatePassword(password) {
    if (!/[A-Z]/.test(password.charAt(0))) {
        return false;
    }
    if (password.length < 8) {
        return false;
    }
    if ((password.match(/\d/g) || []).length < 2) {
        return false;
    }
    if (!/[\W_]/.test(password)) {
        return false;
    }
    return true;
}

document.getElementsById('signupform').addEventListener('submit', function(event) {
    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;

    if (!validatePassword(password)) {
        alert('Password does not meet the requirements.');
        event.preventDefault();
    }
});

console.log("password")

