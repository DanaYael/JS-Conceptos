// El método .split() se usa en cadenas de texto para dividir un string en un array, basado en un separador que se especifique.
// Este método es útil cuando necesitas descomponer una cadena en partes, como palabras, letras o cualquier elemento definido por un delimitador.

// Contar palabras en una oración

let palabras = "Aprender JavaScript es divertido y útil".split(" ");
let cantidadPalabras = palabras.length;
console.log(`Número de palabras: ${cantidadPalabras}`); // Salida: Número de palabras: 5

// Extraer valores de un CSV (archivo de valores separados por comas)
// Si tienes una cadena de datos de un archivo CSV, .split() te permite extraer cada campo.

let lineaCSV = "Juan,25,Argentina,Estudiante";
let datos = lineaCSV.split(",");
console.log(datos); // Salida: ["Juan", "25", "Argentina", "Estudiante"]

let palabra = "El lenguaje de programación JavaScript es asombroso";
let palabrasFiltradas = "Aprender JavaScript es divertido y útil"
  .split(" ")
  .filter((palabra) => palabra.length > 4);
console.log(palabrasFiltradas); // Salida: ["lenguaje", "programación", "JavaScript", "asombroso"]

// Usar un separador y un límite javascript

let texto = "banana,manzana,naranja";
let frutas = texto.split(",", 2);
console.log(frutas); // Salida: ["banana", "manzana"]
