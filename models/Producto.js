class Producto { //Esto debería ser una clase ? 
    constructor(){
        if (new.target === Producto) {
            throw new TypeError("Cannot construct Producto instances directly");
        }
    }

    getPrecio() {
        throw new Error("Metodo getPrecio() debe ser implementado en la subclase");
    }
}