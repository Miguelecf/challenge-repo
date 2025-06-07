const CasaDepto = require("./CasaDepto");

class Cabania extends CasaDepto {
    constructor(direccion, cantidadAmbientes, cantidadNoches, cantidadCasas){
        super(direccion,cantidadAmbientes,cantidadNoches);
        
        if(!cantidadCasas || cantidadCasas <= 0){
            throw new Error ("La cantidad de casas debe ser mayor a cero")
        }

         this.cantidadCasas = cantidadCasas

    }

    getPrecio(){
        const precioPorCasa = super.getPrecio();

        //Si solo se alquila una casa no hay descuento
        if(this.cantidadCasas === 1 ){
            return precioPorCasa;
        }

        let descuentoPorcentaje = 10 * this.cantidadCasas;
        if (descuentoPorcentaje > 50) descuentoPorcentaje = 50;

        const descuento = (descuentoPorcentaje / 100) * precioPorCasa;

        const precioConDescuento = precioPorCasa - descuento;

        return precioConDescuento * this.cantidadCasas;
    }
}
module.exports = Cabania;
//Ejemplo de uso
// const cabania = new Cabania("Callecita ejemplo","2",5,2);
