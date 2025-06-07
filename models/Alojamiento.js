const Producto = require("./Producto");

class Alojamiento extends Producto {
  constructor(direccion) {
    super();
    if (!direccion) {
      throw new Error("La dirección es obligatoria");
    }
    this.direccion = direccion;
  }

    getPrecio() {
        throw new Error("Método getPrecio() debe ser implementado en la subclase");
    }

    getDireccion() {
        return this.direccion; // Método para obtener la dirección
    }
}

module.exports = Alojamiento;