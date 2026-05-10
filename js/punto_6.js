// 6) – Crear una aplicación web para la gestión de una biblioteca el objeto deberá 
// llamarse Libro y tener propiedades como Titulo, Autor, Genero, AñoPublicacion tb deberán
// crear un array llamado LibrosTotales e ir guardando distintos libros luego mostrar todos
// los datos en listas desordenadas en su pagina web.

import { librosTotales } from "./data.js";

class libro {
    constructor(title, author, genre, yearPublished) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.yearPublished = Number(yearPublished);
    }

}
librosTotales.push(

    new libro(
        "Pride and Prejudice",
        "Jane Austen",
        "Romance",
        1813
    ),

    new libro(
        "1984",
        "George Orwell",
        "Dystopian",
        1949
    ),

    new libro(
        "Crime and Punishment",
        "Fyodor Dostoevsky",
        "Psychological Fiction",
        1866
    ),

    new libro(
        "White Nights",
        "Fyodor Dostoevsky",
        "Romantic Fiction",
        1848
    ),

    new libro(
        "Animal Farm",
        "George Orwell",
        "Political Satire",
        1945
    ),

    new libro(
        "Metamorphosis",
        "Franz Kafka",
        "Existential Fiction",
        1915
    )

);

const showBtn = document.querySelector(".showBtn");
const form = document.querySelector("form");
const bookNameInput = document.querySelector("#bookNameInput");
const authorInput = document.querySelector("#authorInput")
const genreInput = document.querySelector("#genreInput");
const yearPublishedInput = document.querySelector("#yearPublishedInput");

function storeBook() {
    const newBook = new libro(bookNameInput.value, authorInput.value, genreInput.value, yearPublishedInput.value);
    librosTotales.push(newBook);
}

function randomizeBookList() {
    const randomList = librosTotales.sort(() => Math.random() - 0.5);
    return randomList;
}

function showBooks() {
    randomizeBookList();
    const booksContainer = document.querySelector(".cardInfo");
    booksContainer.innerHTML = librosTotales.map(e => `
        <div class="col border-dark mt-3 p-2 ">
            <div class="card">
                <div class="card-body mt-1">
                    <h5 class="card-title p-2 mb-3 bg-dark text-light">Nombre: ${e.title}</h5>
                    <p class="card-text">Autor: ${e.author}</p>
                    <p class="card-text">Genero: ${e.genre}</p>
                    <p class="card-text"><small>Año Publicado: ${e.yearPublished} </small></p>
                </div>
            </div>
        </div>
            `).join("");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!bookNameInput.value.trim() || !genreInput.value.trim() ||
        !authorInput.value.trim() || !yearPublishedInput.value.trim()) {
        alert("Complete todos los campos");
        return;
    }
    if (!yearPublishedInput.value.trim() ||
        isNaN(parseFloat(yearPublishedInput.value))) {
        alert("El año debe ser un numero");
        return;
    }
    storeBook();
    function log() {
        librosTotales.forEach(element => {
            console.log(element)

        });
    }
    log();


});

showBtn.addEventListener('click', () => {

    showBooks()
})

