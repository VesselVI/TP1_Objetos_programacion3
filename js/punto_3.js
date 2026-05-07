import { productsStock } from "./data.js";
// 3) – Crear una aplicación web para mostrar datos de 
// un producto ingresado x un cliente deberán crear un objeto
//  llamado Producto que contenga información sobre ese producto 
//  como Nombre, Precio, Descripción, Marca y porcDescuento luego 
//  crea un método llamado CalcularDescuento en el objeto que calcule 
//  y devuelva el precio con el descuento aplicado. 
//  Al finalizar muestra todos los datos a través el documento.

class Product {
    constructor(name, price, description, brand, discAmount) {
        this.name = name;
        this.price = Number(price);
        this.description = description;
        this.brand = brand;
        this.discAmount = Number(discAmount);
    }

    calcDiscount() {
        return this.price - (this.price * (this.discAmount / 100));
    }

}

// const prod = new Product("pava", 200, "calienta agua", "thermos", 10);

// console.log(prod.calcDiscount());
const form = document.querySelector("form");
const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const descriptionInput = document.querySelector("#descriptionInput");
const brandInput = document.querySelector("#brandInput");
const discAmount = document.querySelector("#discountInput");


function storeProduct() {


    const newProduct = new Product(nameInput.value, priceInput.value, descriptionInput.value, brandInput.value, discAmount.value);
    productsStock.push(newProduct);
}

function showProduct() {
    const productContainer = document.querySelector(".productInfo")

    productContainer.innerHTML = productsStock.map(product => `
        <div class="productHTML">
            <h3>Nombre: ${product.name}</h3>
            <h3>Precio: ${product.price}</h3>
            <h3>Descripcion: ${product.description}</h3>
            <h3>Marca: ${product.brand}</h3>
            <h3>Precio con descuento: $${product.calcDiscount()}</h3>
        
        </div>
        
        `).join("");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        !nameInput.value.trim() || !priceInput.value.trim() ||
        !descriptionInput.value.trim() || !brandInput.value.trim() ||
        !discAmount.value.trim()
    ) {
        alert("Complete todos los campos");
        return;
    }
    if (
        isNaN(priceInput.value) ||
        isNaN(discAmount.value)
    ) {
        alert("Precio y descuento deben ser números");
        return;
    }
    storeProduct();
    showProduct();

})