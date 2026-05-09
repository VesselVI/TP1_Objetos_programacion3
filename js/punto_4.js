// 4) – Crear una aplicación web para ver los datos de un empleado y poder calcular su salario. 
// Crear un Objeto llamado Empleado propiedades Nombre, Apellido, Dni, Dirección y SalarioxMes 
// deberán pedir x pantalla todos esos datos al usuario y después mostrarlos en el documento.

import { employeeQuantity } from "./data.js";

class employee {
    constructor(name, lastName, dni, address, salary) {
        this.name = name;
        this.lastName = lastName;
        this.dni = Number(dni);
        this.address = address;
        this.salary = parseFloat(salary);
    }
    calcYearlySalary() {
        return this.salary * 12;
    }
}

const form = document.querySelector("form");
const nameInput = document.querySelector("#nameInput");
const lastNameInput = document.querySelector("#lastNameInput")
const DNI_Input = document.querySelector("#DNI_Input");
const addressInput = document.querySelector("#addressInput");
const salaryInput = document.querySelector("#salaryInput")

function storeEmployee() {
    const newEmployee = new employee(nameInput.value, lastNameInput.value, DNI_Input.value, addressInput.value, salaryInput.value);
    employeeQuantity.push(newEmployee);
}

function showEmployee() {
    const employeeContainer = document.querySelector(".cardInfo");

    employeeContainer.innerHTML = employeeQuantity.map(e => `
        <div class="col border-dark mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title ">Nombre del empleado: ${e.name} ${e.lastName}</h5>
                    <p class="card-text">DNI: ${e.dni}</p>
                    <p class="card-text">Direccion: ${e.address}</p>
                    <p class="card-text">Sueldo: $${e.salary.toFixed(2)}</p>
                </div>
            </div>
        </div>
            `).join("");
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nameInput.value.trim() || !lastNameInput.value.trim() ||
        !DNI_Input.value.trim() || !addressInput.value.trim() ||
        !salaryInput.value.trim()) {
        alert("Complete todos los campos");
        return;
    }
    if (!salaryInput.value.trim() ||
        isNaN(parseFloat(salaryInput.value))) {
        alert("El salario debe ser un numero");
        return;
    }
    storeEmployee();
    showEmployee();

})
/*<div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>*/