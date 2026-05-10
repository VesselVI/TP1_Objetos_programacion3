// 7) – Crear una aplicación web para mostrar Las distintas ciudades 
// que tiene Japón deberán crear un array de objetos
// llamado JapanCitys el cual dentro deberá tener los datos de 6 ciudades 
// reales de Japón deberán buscar esos datos (Nombre, Población, Área,
// Imagen_Url, Altitud, Clima) y llenar ustedes el array servirá 
// a modo de API luego deberán mostrar esos datos en cards de Bootstrap
//  3 x fila.
import { japanCities } from "./data.js";

const form = document.querySelector("form");
const cityInput = document.querySelector("#cityInput");
const cityInfo = document.querySelector(".cardInfo");

function searchCity(cityName) {

    return japanCities.filter(city =>
        city.name.toLowerCase().includes(cityName.toLowerCase())
    );
}

function showCity(cities) {


    if (cities.length === 0) {
        cityInfo.innerHTML =
            "<p>No se encontraron ciudades</p>";
        return;
    }
    cityInfo.innerHTML = cities.map(city => `

        <div class="col mb-4">
            <div class="card h-100">
                <img src="${city.imageUrl}" class="card-img-top" alt="${city.name}"
                    style="height: 250px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${city.name}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Poblacion: ${city.population}</li>
                        <li class="list-group-item">Area: ${city.area}</li>
                        <li class="list-group-item">Altitud: ${city.altitude}</li>
                        <li class="list-group-item">Clima: ${city.weather} </li>
                    </ul>
                </div>
            </div>
        </div>

    `).join("");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = cityInput.value;

    if (!value.trim()) {
        alert("escribi una ciudad");
        return;
    };

    const result = searchCity(value);
    showCity(result);
})


