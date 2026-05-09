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
        <div class="col mb-4">
 
            <div class="card">
                <img src="${car.imagen}" class="img-fluid card-img-top" alt="car image">
                <div class="card-body">
                    <h5 class="card-title">Marca: ${car.marca}</h5>
                    <h5>Modelo: ${car.modelo}</h5>  
                    <p class="card-text">Color: ${car.color}</p>
                    <p class="card-text">Precio: ${car.precio}</p>
                    <p class="card-text">Antiguedad: ${calcEdad(car.año)} años</p>
                    <p class="card-text"><small class="text-muted">Año: ${car.año}</small></p>g
                </div>  
            </div>
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
