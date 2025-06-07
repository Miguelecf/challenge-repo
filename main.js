const Vuelo = require('./models/Vuelo');
const CasaDepto = require('./models/CasaDepto');
const Cabania = require('./models/Cabania');
const Usuario = require('./models/Usuario');
const Hotel = require('./models/Hotel');

// Crear productos
const vuelo = new Vuelo("2025-06-15", "2025-06-20", "Aerolíneas Argentina", 120000);
const casa = new CasaDepto("Av. Boedo 742", 3, 5); // 3 ambientes, 5 noches
const cabania = new Cabania("Patagonia Hotel ", 2, 4, 3); // 3 casas, 2 ambientes, 4 noches
const vuelo2 = new Vuelo("2025-06-30",null ,"Fly Bondi", 150000);
const hotelCielo = new Hotel("Av 9 de julio 989","Hotel Cielo",4,10);
//Calculando precio del hotel
console.log("Precio del hotel cielo, "+ hotelCielo.getPrecio()+"\n");

//Precio de los vuelos
console.log ("Imprime los vuelos completos");

console.log("\nVuelo numero 1: "+ vuelo.toString());
console.log("\nVuelo numero 2: " + vuelo2.toString());

// Crear usuario
const user = new Usuario(1,"miguel_dev", 1000000);

//Precio de la casa
console.log(" \nEl precio de la casa es: " + casa.getPrecio());

//Precio de cabanias
console.log("\nLas cabanias estan en: " + cabania.getPrecio()+ " Tiene aplicado descuento de: "+ cabania.getDescuento()+ "%");

try {
    user.agregarProducto(vuelo);
    user.agregarProducto(casa);
    user.agregarProducto(cabania);
} catch (error) {
    console.error("No se pudo agregar un producto: \n", error.message);
}

console.log("\n Productos adquiridos por el usuario: ");
user.getListaProductos();
