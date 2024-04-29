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
