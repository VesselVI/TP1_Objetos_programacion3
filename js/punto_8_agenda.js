import { contacts } from "./data.js";

class Contact {

    constructor(fullName, phone, address, email) {

        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }

}

const form = document.querySelector("form");

const nameInput = document.querySelector("#nameInput");
const phoneInput = document.querySelector("#phoneInput");
const addressInput = document.querySelector("#addressInput");
const emailInput = document.querySelector("#emailInput");

const tableBody = document.querySelector(".tableBody");

function storeContact() {

    const newContact = new Contact(
        nameInput.value,
        phoneInput.value,
        addressInput.value,
        emailInput.value
    );

    contacts.push(newContact);
}

function showContacts() {

    tableBody.innerHTML = contacts.map(contact => `

        <tr>

            <td>
                ${contact.fullName}
            </td>

            <td>
                ${contact.phone}
            </td>

            <td>
                ${contact.address}
            </td>

            <td>
                ${contact.email}
            </td>

        </tr>

    `).join("");
}

showContacts();

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (
        !nameInput.value.trim() ||
        !phoneInput.value.trim() ||
        !addressInput.value.trim() ||
        !emailInput.value.trim()
    ) {

        alert("Complete todos los campos");
        return;
    }

    storeContact();

    showContacts();

    form.reset();

});