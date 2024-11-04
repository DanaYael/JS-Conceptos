// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
//  nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimirDatos() {
    return `<p>${this.codigo} , ${this.nombre} , ${this.precio}</p>`;
  }
}

const Producto1 = new Producto(231, "Alfajor", 1300);
const Producto2 = new Producto(232, "Oblea", 800);
const Producto3 = new Producto(233, "Turron", 950);

const productos = [Producto1, Producto2, Producto3];

productos.forEach((productos) => {
  document.write(productos.imprimirDatos());
});
