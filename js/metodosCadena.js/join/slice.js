// -------------------------j o i n  -------------------------

// Combina todos los elementos de un array en una sola cadena (string).
// Sintaxis: array.join(separador)
// separador es opcional. Especifica el carácter o cadena que se usará entre los elementos (por defecto es una coma ,).
// Ejemplo:

const frutas = ["manzana", "banana", "pera"];
const resultad = frutas.join(" - ");
console.log(resultado);

// -------------------------s l i c e -------------------------

// Función: Crea una nueva copia de una porción del array sin modificar el array original.
// Sintaxis: array.slice(inicio, fin)
// inicio es el índice donde empieza la selección.
// fin es opcional; indica hasta dónde tomar elementos sin incluir ese índice.

// El método slice no incluye el elemento en el índice del segundo parámetro (fin). En el ejemplo:

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.slice(1, 4);
console.log(resultado); // [2, 3, 4]
console.log(numeros); // [1, 2, 3, 4, 5] (el original no cambia)
