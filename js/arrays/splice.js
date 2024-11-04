// .splice() es un método de arrays en JavaScript que permite agregar, eliminar o reemplazar elementos en una posición específica de un array.
// Modifica el array original y retorna los elementos eliminados (si los hay). Su sintaxis general es:

// array.splice(start, deleteCount, item1, item2, ...);

// start: índice desde el que se comenzará a modificar el array.
// deleteCount: cantidad de elementos a eliminar desde el índice start. Si es 0, no se elimina ninguno.
// item1, item2, ...: elementos que se añadirán en la posición indicada. Si no se pasan, solo se eliminan elementos.
// Ejemplos de uso

// 1. Eliminar elementos

let numeros = [1, 2, 3, 4, 5];
numeros.splice(1, 2); // Elimina dos elementos desde el índice 1
console.log(numeros); // Salida: [1, 4, 5]

// 2. Añadir elementos
// Agrega elementos en un índice específico sin eliminar nada.

let frutas = ["manzana", "banana", "naranja"];
frutas.splice(1, 0, "fresa", "mango"); // Añade elementos en el índice 1
console.log(frutas); // Salida: ["manzana", "fresa", "mango", "banana", "naranja"]

// 3. Reemplazar elementos
// Reemplaza elementos al especificar deleteCount mayor que 0 e incluyendo nuevos elementos.

let colores = ["rojo", "verde", "azul"];
colores.splice(1, 1, "amarillo"); // Reemplaza "verde" con "amarillo"
console.log(colores);
// Salida: ["rojo", "amarillo", "azul"]

// 4. Retornar los elementos eliminados
// .splice() también devuelve los elementos eliminados, útil si necesitas guardarlos.

let num = [10, 20, 30, 40];
let eliminados = num.splice(1, 2); // Elimina dos elementos desde el índice 1
console.log(eliminados); // Salida: [20, 30]
console.log(num); // Salida: [10, 40]
