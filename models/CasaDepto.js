class CasaDepto extends Alojamiento {
    constructor(direccion, cantidadAmbientes, cantidadNoches) {
        super(direccion);

        if (!cantidadAmbientes || cantidadAmbientes <= 0) {
            throw new Error("La cantidad de ambientes es obligatoria y debe ser mayor a cero");
        }

        if (!cantidadNoches || cantidadNoches <= 0) {
            throw new Error("La cantidad de noches debe ser mayor a cero");
        }

        this.cantidadAmbientes = cantidadAmbientes;
        this.cantidadNoches = cantidadNoches;
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

        return precioPorNoche * this.cantidadNoches;
    }
}
module.exports = CasaDepto;
// Ejemplo de uso:
// const casa = new CasaDepto("Calle Ejemplo", 3, 5);
// console.log(casa.getPrecio()); // Debería imprimir 150000 (30000 * 5 noches)