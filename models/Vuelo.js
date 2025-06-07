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
    }
    getPrecio() {
        return this.precio;
    }

}