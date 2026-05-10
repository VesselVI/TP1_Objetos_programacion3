import { users } from "./data.js";

const form = document.querySelector("form");
const userInput = document.querySelector("#userInput");
const passwordInput = document.querySelector("#passwordInput");

function validateUser(userName, password) {

    return users.find(user =>

        user.userName === userName &&
        user.password === password

    );
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const userValue = userInput.value;
    const passwordValue = passwordInput.value;

    if (!userValue.trim() ||
        !passwordValue.trim()) {

        alert("Complete todos los campos");
        return;
    }

    const result = validateUser(userValue, passwordValue);

    if (!result) {
        alert("Usuario o contraseña incorrectos");
        return;
    }

    window.location.href = "./punto_8_Agenda.html";

});