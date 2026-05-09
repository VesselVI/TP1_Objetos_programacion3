// 5) – En el objeto creado anteriormente deberán agregar propiedades SueldoxHs, PrecioxHs 
// y una funcion SalarioxMes que calcule el salario mensual del empleado tb deberán agregar
//  un array vacío llamado Empleados el cual deberán ir llenando con nuevos empleados y luego 
//  mostrar x consola todos estos datos.

import { employeeList } from "./data.js";

class employeeSalary {
    constructor(name, lastName, dni, address, salaryHs, hoursPerWeek) {
        this.name = name;
        this.lastName = lastName;
        this.dni = Number(dni);
        this.address = address;
        this.salaryHs = parseFloat(salaryHs);
        this.hoursPerWeek = Number(hoursPerWeek);
    }
    CalcYearlySalary() {
        return this.CalcMonthlySalary() * 12;
    }
    CalcMonthlySalary() {
        return parseFloat((this.salaryHs * this.hoursPerWeek) * 4);
    }

}

const form = document.querySelector("form");
const nameInput = document.querySelector("#nameInput");
const lastNameInput = document.querySelector("#lastNameInput")
const DNI_Input = document.querySelector("#DNI_Input");
const addressInput = document.querySelector("#addressInput");
const salaryHsInput = document.querySelector("#salaryHsInput");
const hoursPerWeekInput = document.querySelector("#hoursPerWeekInput")

function storeEmployee() {
    const newEmployee = new employeeSalary(nameInput.value, lastNameInput.value, DNI_Input.value, addressInput.value, salaryHsInput.value, hoursPerWeekInput.value);
    employeeList.push(newEmployee);
}

function showEmployee() {
    const employeeContainer = document.querySelector(".cardInfo");

    employeeContainer.innerHTML = employeeList.map(e => `
        <div class="col border-dark mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title p-2 mb-3 bg-secondary text-white">Nombre del empleado: ${e.name} ${e.lastName}</h5>
                    <p class="card-text">DNI: ${e.dni}</p>
                    <p class="card-text">Direccion: ${e.address}</p>
                    <p class="card-text">Sueldo por hora: $${e.salaryHs.toFixed(2)}</p>
                    <p class="card-text">Horas semanales de trabajo: ${e.hoursPerWeek}</p>
                    <p class="card-text"><small>Salario Mensual: $${e.CalcMonthlySalary().toFixed(2)} </small></p>
                    <p class="card-text"><small>Salario Anual: $${e.CalcYearlySalary().toFixed(2)} </small></p>
                </div>
            </div>
        </div>
            `).join("");
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nameInput.value.trim() || !lastNameInput.value.trim() ||
        !DNI_Input.value.trim() || !addressInput.value.trim() ||
        !salaryHsInput.value.trim() || !hoursPerWeekInput.value.trim()) {
        alert("Complete todos los campos");
        return;
    }
    if (!salaryHsInput.value.trim() ||
        isNaN(parseFloat(salaryHsInput.value))) {
        alert("El salario debe ser un numero");
        return;
    }
    storeEmployee();
    showEmployee();
    function log() {
        employeeList.forEach(element => {
            console.log(element)

        });
    }
    log();


})