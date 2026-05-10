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

export const japanCities = [

    {
        name: "Tokyo",
        population: "14.18 millones",
        area: "2,194 km²",
        imageUrl: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altitude: "40 m",
        weather: "Templado húmedo subtropical"
    },

    {
        name: "Kyoto",
        population: "1.46 millones",
        area: "827.8 km²",
        imageUrl: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altitude: "50 m",
        weather: "Templado húmedo"
    },

    {
        name: "Osaka",
        population: "2.75 millones",
        area: "225 km²",
        imageUrl: "https://plus.unsplash.com/premium_photo-1724593825200-39731dcdacf8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altitude: "15 m",
        weather: "Subtropical húmedo"
    },

    {
        name: "Sapporo",
        population: "1.97 millones",
        area: "1,121 km²",
        imageUrl: "https://images.unsplash.com/photo-1619338360476-37195f14909e?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altitude: "29 m",
        weather: "Continental húmedo"
    },

    {
        name: "Hiroshima",
        population: "1.19 millones",
        area: "906.7 km²",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661963745503-8b3a86b8c2b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altitude: "4 m",
        weather: "Subtropical húmedo"
    },

    {
        name: "Nagasaki",
        population: "407 mil",
        area: "405.6 km²",
        imageUrl: "https://images.unsplash.com/photo-1646657508506-615eb18f863e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altitude: "35 m",
        weather: "Templado húmedo"
    }

];

export const users = [

    {
        userName: "ignacio",
        password: "1234",
        creationDate: "2026-05-10"
    },

    {
        userName: "admin",
        password: "admin123",
        creationDate: "2026-05-11"
    }

];

export const contacts = [

    {
        fullName: "Juan Perez",
        phone: "3815551234",
        address: "San Miguel de Tucuman",
        email: "juan@gmail.com"
    },

    {
        fullName: "Maria Gomez",
        phone: "3814448888",
        address: "Yerba Buena",
        email: "maria@gmail.com"
    },

    {
        fullName: "Carlos Lopez",
        phone: "3817779999",
        address: "Tafi Viejo",
        email: "carlos@gmail.com"
    }

];