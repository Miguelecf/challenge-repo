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
    
}