function validatePassword(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var validationResult = document.querySelector(".validatedpassword");

    var specialCharRegex = /[^a-zA-Z0-9]/;

    var numbersRegex = /\d/g;
    var countNumbers = (password.match(numbersRegex) || []).length;

    var requirements = [];

    if (password.length < 8) {
        requirements.push("Password must be at least 8 characters");
    }

    if (!/[A-Z]/.test(password)) {
        requirements.push("Password must contain at least one capital letter");
    }

    if (countNumbers < 2) {
        requirements.push("Password must contain at least two numbers");
    }

    if (!specialCharRegex.test(password)) {
        requirements.push("Password must contain at least one special character");
    }

    if (requirements.length > 0) {
        var ul = document.createElement("ul");
        requirements.forEach(function (requirement) {
            var li = document.createElement("li");
            li.textContent = requirement;
            ul.appendChild(li);
        });
        validationResult.innerHTML = "";
        validationResult.appendChild(ul);
        validationResult.style.color = "red";
    } else {
        validationResult.textContent = "Success, proceed with login";
        validationResult.style.color = "green";
    }
}