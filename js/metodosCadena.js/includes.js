// Para arrays
// .I N C LU D E S () también se utiliza para verificar si un valor está presente en un array.
// .includes() es especialmente útil cuando quieres realizar comprobaciones rápidas sin tener que usar bucles o condiciones adicionales.

// Sintaxis

let frase = "Hola, bienvenido a JavaScript";
console.log(frase.includes("bienvenido"));
// Salida: true

console.log(frase.includes("adiós"));
// Salida: false

// array.includes(elemento, inicio);
// elemento: El valor a buscar dentro del array.
// inicio (opcional): Índice desde el cual comenzar la búsqueda en el array.
// Ejemplo

let numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(3));
// Salida: true

console.log(numeros.includes(6));
// Salida: false

// ---------------------------------T R I M------------------------------------------------

// El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).
// El método trim( ) devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos. El método no afecta al valor de la cadena de texto.

// Sintaxis
// str.trim()

var orig = "   foo  ";
console.log(orig.trim()); // 'foo'
