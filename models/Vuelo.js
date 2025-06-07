class Vuelo extends Producto {
    constructor(fechaIda, fechaVuelta, aerolinea, precio) {
        super();
        this.fechaIda = fechaIda;//Obligatorio, fecha de ida del vuelo
        if (!fechaIda) {
            throw new Error("La fecha de ida es obligatoria");
        }
        if (fechaVuelta && fechaVuelta < fechaIda) {
            throw new Error("La fecha de vuelta no puede ser anterior a la fecha de ida");
        }
        this.fechaVuelta = null; // Inicializado como null, puede ser opcional
        if (fechaVuelta) {
            this.fechaVuelta = fechaVuelta; // Si se proporciona, se asigna
        }
        this.aerolinea = aerolinea; // Aerolínea del vuelo
        this.precio = precio; // Precio del vuelo
        if (!precio || precio <= 0) {
            throw new Error("El precio es obligatorio y debe ser mayor a cero");
        }
    }
    getPrecio() {
        return this.precio;
    }
}

module.exports = Vuelo;
// Ejemplo de uso:
// const vuelo = new Vuelo("2023-10-01", "2023-10-10", "Aerolínea Ejemplo", 50000);
// console.log(vuelo.getPrecio()); // Debería imprimir 50000