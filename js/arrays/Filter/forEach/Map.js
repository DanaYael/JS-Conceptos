// 1.--------------------- filter-----------------

// Propósito: Crea un nuevo array con todos los elementos que cumplen con la condición proporcionada en la función de callback.
// Retorno: Devuelve un nuevo array.
// No modifica el array original.

// Ejemplo:

const numerosS = [1, 2, 3, 4, 5];
const pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // [2, 4]

// 2. --------------------M A P ---------------

// Usando map
// El método map crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
//  Por ejemplo, si quieres duplicar cada número en un array:
// devuelve un nuevo array que contiene los resultados.
// Inmutable: El array original no se modifica.

// Uso:
// map se utiliza cuando quieres transformar datos.

const numeros = [1, 2, 3, 4];
const duplicados = numeros.map((num) => num * 2);

console.log(duplicados); // [2, 4, 6, 8]

// 2. --------------------forEach---------------

// Propósito: Ejecuta una función proporcionada una vez por cada elemento del array.
// Retorno: No devuelve nada (undefined).
// Se usa para realizar efectos secundarios, como imprimir o modificar  variables externas,.

// Ejemplo:

const numeross = [1, 2, 3, 4, 5];
numeros.forEach((num) => {
  console.log(num * 2); // Imprime 2, 4, 6, 8, 10
});

// Diferencias Clave

// Resultado: filter devuelve un nuevo array, mientras que forEach no devuelve nada.
// Uso: filter se usa para crear un nuevo array basado en una condición,
// mientras que forEach se utiliza para realizar una acción en cada elemento del array sin necesidad de crear un nuevo array.
// Modificación: filter no modifica el array original, y forEach tampoco lo hace, pero puedes modificar los elementos dentro de la función si es necesario.

// forEach no devuelve nada, me refiero a que no puedes asignar el resultado de forEach a una variable para obtener un nuevo array,
// como podrías hacerlo con filter.
// El método forEach simplemente ejecuta una función en cada elemento del array y no crea ni devuelve un nuevo array.

// ----------CUANDO USAR forEach------------

// 1. Ejecutar un efecto secundario:
// Si necesitas realizar una acción que no requiere almacenar un nuevo resultado, como imprimir en la consola o actualizar el DOM.

const nombre = ["Juan", "Ana", "Pedro"];
nombre.forEach((nombre) => {
  console.log(`Hola, ${nombre}!`); // Imprimir un saludo para cada nombre
});

// 2. Modificar elementos en un objeto externo:
// Puedes usar forEach para modificar una variable externa o un objeto mientras recorres el array.

const numero = [1, 2, 3, 4];
let suma = 0;
numero.forEach((num) => {
  suma += num; // Sumar todos los números en la variable externa
});
console.log(suma); // 10

// Si necesitas realizar una acción que no requiere almacenar un nuevo resultado, como imprimir en la consola o actualizar el DOM.

const nombres = ["Juan", "Ana", "Pedro"];
nombres.forEach((nombre) => {
  console.log(`Hola, ${nombre}!`); // Imprimir un saludo para cada nombre
});

// 4. Recorrer elementos en el DOM:
// Si necesitas aplicar cambios a múltiples elementos del DOM, forEach puede ser más claro y fácil de leer que un bucle for.

const elementos = document.querySelectorAll(".mi-clase");
elementos.forEach((elemento) => {
  elemento.style.color = "blue"; // Cambiar el color de todos los elementos
});

// 5. Usar funciones anónimas o de flecha:
// El uso de forEach permite una sintaxis más limpia y concisa, especialmente con funciones de flecha.

const numer = [1, 2, 3];
numer.forEach((num) => {
  console.log(num * 2); // Imprimir el doble de cada número
});

// Resumen
// En resumen, usa forEach cuando necesites realizar acciones sobre los elementos de un array sin la necesidad de construir un nuevo array.
//  Es más expresivo y fácil de leer en comparación con un bucle for tradicional en muchos casos. Sin embargo,
//  si necesitas crear un nuevo array basado en condiciones, entonces map, filter, o reduce son más apropiados.
