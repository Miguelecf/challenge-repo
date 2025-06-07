const Alojamiento = require('./Alojamiento');
// Clase CasaDepto que hereda de Alojamiento

class Hotel extends Alojamiento{
    constructor(direccion, nombre, cantidadEstrellas, noches){
        super(direccion);
        if (!nombre) {
            throw new Error("El nombre del hotel es obligatorio");
        }
        if (!cantidadEstrellas || cantidadEstrellas < 1 || cantidadEstrellas > 5) {
            throw new Error("La cantidad de estrellas debe ser un número entre 1 y 5");
        }
        if (!noches || noches <= 0) {
            throw new Error("La cantidad de noches debe ser mayor a cero");
        }
        
        this.nombre = nombre; // Nombre del hotel
        this.cantidadEstrellas = cantidadEstrellas; // Cantidad de estrellas del hotel
        this.noches = noches; // Cantidad de noches de estadía
    }

    getPrecio() {
        return 10000 * this.cantidadEstrellas * this.noches; // Precio base por estrella por noche
    }

    getNombre() {
        return this.nombre; // Método para obtener el nombre del hotel
    }
    getCantidadEstrellas() {
        return this.cantidadEstrellas; // Método para obtener la cantidad de estrellas del hotel
    }
    getNoches() {
        return this.noches; // Método para obtener la cantidad de noches de estadía
    }
}
module.exports = Hotel;
// Ejemplo de uso:
// const hotel = new Hotel("Calle Ejemplo", "Hotel Ejemplo", 4, 3);
// console.log(hotel.getPrecio()); // Debería imprimir 120000 (10000 * 4 estrellas * 3 noches)