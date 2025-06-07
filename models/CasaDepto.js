class CasaDepto extends Alojamiento {
    
    constructor(direccion, precioPorNoche, cantidadAmbientes) {
        super(direccion);
        if (!precioPorNoche || precioPorNoche <= 0) {
            throw new Error("El precio por noche es obligatorio y debe ser mayor a cero");
        }
        if (!cantidadAmbientes || cantidadAmbientes <= 0) {
            throw new Error("La cantidad de ambientes es obligatoria y debe ser mayor a cero");
        }
        this.precioPorNoche = precioPorNoche; // Precio por noche del alojamiento
        this.cantidadAmbientes = cantidadAmbientes; // Cantidad de ambientes del alojamiento
    }

    getPrecio() {
        let precioPorNoche;
        if (this.cantidadAmbientes === 1) {
            precioPorNoche = 15000;
        } else if (this.cantidadAmbientes <= 4) {
            precioPorNoche = 30000;
        } else {
            precioPorNoche = 50000;
        }

        return precioPorNoche * this.noches;
    }

}