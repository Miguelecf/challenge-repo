# challenge-repo

- En usuario agregué ID para tenerlos ordenados de mejor manera
- Elegi javascript como lenguaje, a pesar de no ser orientado a objetos en si, es el lenguaje que venia aprendiendo mas.
- Alojamiento y Producto, son clases abstractas.
- getPrecio(), es un metodo abstracto que se fue declarando y aplicando en cada clase que fue necesario.
- Agregué distintas validaciones a pesar de no ser pedidas.



# Planteamiento del problema (Forma en la que fui abordando las diferentes partes del enunciado)
### Productos que ofrece la empresa

- Vuelos
- Alojamientos
- Paquetes compuestos por múltiples viajes, alojamientos u otros paquetes.

---

### Vuelos:

- Fecha de ida
- Fecha de vuelta (si corresponde)
- Aerolínea

---

## Alojamientos, pueden ser:

### Alojamientos extends Producto:

- Dirección

### Casas/Departamentos extends Alojamientos

- Cantidad de ambientes

### Hoteles extends Alojamientos

- Nombre
- Cantidad de estrellas

---

## Usuario:

- Nombre de usuario
- Presupuesto
- Lista productos que compro.

Cada usuario podrá:

→ **Comprar producto:** 

1. **Caso negativo: Cuando el presupuesto es menor que el precio del producto, se deberá notificar que no es posible**
2. **Caso positivo: Se deberá almacenar el producto en los adquiridos por el usuario. Se deberá descontar el valor del producto de su presupuesto**

---

### Productos

- **Precio: Me parece que este es calculado. A partir de otras cosas.**

→ **Los viajes tienen un precio establecido para cada uno.**

→ **Los hoteles tienen un precio de 10.000 por cada estrella** 

→ **Las casas y departamentos siguen:**

— Monoambientes: 15.000 por noche

— Entre 2 y 4 ambientes: 30.000 por noche

— Más de 4 ambientes: 50.000 por noche 

---

## Tipo de CASA ESPECIFICO

### Las cabañas:

→ Su particularidad es que se componen de multiples casas y se pueden alquilar de manera individual o grupal. En caso de optar por la última opción, el usuario tendrá 10% de descuento por casa. Como máximo podrá acceder a un 50% de descuento.
