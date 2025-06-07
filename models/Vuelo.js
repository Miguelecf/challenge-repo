class Vuelo extends Producto {
  constructor(fechaIda, fechaVuelta, aerolinea, precio) {
    super();

    if (!fechaIda) {
      throw new Error("La fecha de ida es obligatoria");
    }

    const ida = new Date(fechaIda);
    let vuelta = null;

    if (fechaVuelta) {
      vuelta = new Date(fechaVuelta);
      if (vuelta < ida) {
        throw new Error("La fecha de vuelta no puede ser anterior a la fecha de ida");
      }
    }

    this.fechaIda = ida;
    this.fechaVuelta = vuelta;
    this.aerolinea = aerolinea;

    if (!precio || precio <= 0) {
      throw new Error("El precio es obligatorio y debe ser mayor a cero");
    }
    this.precio = precio;
  }

  getPrecio() {
    return this.precio;
  }
  getFechaIda() {
    return this.fechaIda; // Método para obtener la fecha de ida
  }
  getFechaVuelta() {
    return this.fechaVuelta; // Método para obtener la fecha de vuelta
  }
  getAerolinea() {
    return this.aerolinea; // Método para obtener la aerolínea
  }
  getDetalles() {
    return {
      fechaIda: this.fechaIda,
      fechaVuelta: this.fechaVuelta,
      aerolinea: this.aerolinea,
      precio: this.precio
    };
  }
}
module.exports = Vuelo;
// Ejemplo de uso:
// const vuelo = new Vuelo("2023-10-01", "2023-10-10", "Aerolínea Ejemplo", 50000);

