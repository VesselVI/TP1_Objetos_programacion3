import { coche } from "./data.js";

function searchAnyCategory(category, input) {
    return coche.filter(coches =>
        coches[category]?.toString().toLowerCase().includes(input.toLowerCase())
    )
};

console.log(searchAnyCategory("marca", "toyota"));
