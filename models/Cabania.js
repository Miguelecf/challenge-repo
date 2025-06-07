const CasaDepto = require("./CasaDepto");

class Cabania extends CasaDepto {
    constructor(direccion, cantidadAmbientes, cantidadNoches, cantidadCasas) {
        super(direccion, cantidadAmbientes, cantidadNoches);

        if (!cantidadCasas || cantidadCasas <= 0) {
            throw new Error("La cantidad de casas debe ser mayor a cero")
        }

        this.cantidadCasas = cantidadCasas

    }

    getPrecio() {
        const precioUnaCasa = super.getPrecio(); // Precio total de una sola casa por todas las noches

        let descuentoPorcentaje = 0;

        if (this.cantidadCasas > 1) {
            descuentoPorcentaje = 10 * this.cantidadCasas;
            if (descuentoPorcentaje > 50) descuentoPorcentaje = 50;
        }

        const precioTotalSinDescuento = precioUnaCasa * this.cantidadCasas;
        const descuento = (descuentoPorcentaje / 100) * precioTotalSinDescuento;

        return precioTotalSinDescuento - descuento;
    }

    getDescuento() {
        let descuentoPorcentaje = 10 * this.cantidadCasas;
        if (descuentoPorcentaje > 50) descuentoPorcentaje = 50;

        return descuentoPorcentaje;
    }
}
module.exports = Cabania;
//Ejemplo de uso
// const cabania = new Cabania("Callecita ejemplo","2",5,2);
