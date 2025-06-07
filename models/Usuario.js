class Usuario {
    constructor(id, nombreUsuario,presupuesto,listaproductos = []) {
        if (!id || !nombreUsuario || !presupuesto) {
            throw new Error("El id, nombre de usuario y presupuesto son obligatorios");
        }
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.presupuesto = presupuesto;
        this.listaproductos = listaproductos; // Lista de productos comprados
    }
    getId() {
        return this.id; // Método para obtener el ID del usuario
    }
    getNombreUsuario() {
        return this.nombreUsuario; // Método para obtener el nombre de usuario
    }
    getPresupuesto() {
        return this.presupuesto; // Método para obtener el presupuesto del usuario
    }
    getListaProductos() {
        return this.listaproductos; // Método para obtener la lista de productos comprados
    }

    agregarProducto(producto){
        const precio = producto.getPrecio();
        if (this.presupuesto < precio) {
            throw new Error("Presupuesto insuficiente para comprar este producto");
        }
        this.presupuesto -= precio; // Descontar el precio del producto del presupuesto
        this.listaproductos.push(producto); // Agregar el producto a la lista de productos comprados
    }
}
module.exports = Usuario;
// Ejemplo de uso:
// const usuario = new Usuario(1, "usuario1", 100000);
// console.log(usuario.getId()); // Debería imprimir 1 