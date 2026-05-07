import { coche } from "./data.js";
import { calcEdad } from "./data.js";

function searchAnyCategory(category, input) {
    return coche.filter(coches =>
        coches[category]?.toString().toLowerCase().includes(input.toLowerCase())
    )
};


const form = document.querySelector("form");
const searchInput = document.getElementById("searchInput");
const selection = document.querySelectorAll(".dropdown-item");
const buttonSelection = document.getElementById("dropdownMenuButton");



let categorySelected = "";

selection.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        categorySelected = item.dataset.category;
        buttonSelection.textContent = item.textContent;
    });
});

function showCar(coche) {
    const carContainer = document.querySelector("form .carInfo")

    if (coche.length === 0) {
        carContainer.innerHTML = "<p>No se encontraron autos</p>";
        return;
    }

    carContainer.innerHTML = coche.map(car => `
        <div class="carInnerInfo">
        <h3>Marca: ${car.marca}</h2>
        <h3>Modelo: ${car.modelo}</h2>
        <ul>
            <br>
            <li>año: ${car.año}</li>
            <li>Color: ${car.color}</li>
            <li>Precio: $${car.precio}</li>
            <li>Edad del coche: ${calcEdad(car.año)} años</li>
        </ul>
        </div>
    `).join("");


}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = searchInput.value;

    if (!categorySelected) {
        alert("selecciona una categoria primero");
        return;
    };

    const result = searchAnyCategory(categorySelected, value);
    showCar(result);
})
