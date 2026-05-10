export const coche = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2022,
        color: "Blanco",
        estado: "Nuevo",
        precio: 18500,
        imagen: "https://images.unsplash.com/photo-1638618164682-12b986ec2a75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        marca: "Ford",
        modelo: "Focus",
        año: 2018,
        color: "Gris",
        estado: "Usado",
        precio: 9500,
        imagen: "https://images.unsplash.com/photo-1687575635336-57e2b0931d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        marca: "Chevrolet",
        modelo: "Cruze",
        año: 2020,
        color: "Negro",
        estado: "Usado",
        precio: 14000,
        imagen: "https://images.unsplash.com/photo-1622268697621-54243bd1e9f4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        marca: "Volkswagen",
        modelo: "Golf",
        año: 2019,
        color: "Rojo",
        estado: "Usado",
        precio: 16000,
        imagen: "https://images.unsplash.com/photo-1704039146873-1ee9afed8d95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


export function calcEdad(year) {
    const anio = new Date().getFullYear();
    const edadAuto = anio - year;
    return edadAuto;
}




export const productsStock = [];

export const employeeQuantity = [];

export const employeeList = [];

export const librosTotales = [];