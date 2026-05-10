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



