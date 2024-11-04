// .substring() es un método en JavaScript que permite extraer una parte de una cadena de texto (string),
// especificando los índices de inicio y final. La porción de texto extraída no incluye el carácter en el índice final.
// Este método no modifica la cadena original y retorna la subcadena extraída.

// string.substring(start, end);
// start: índice donde comenzará la extracción.
// end (opcional): índice donde se detendrá la extracción, pero sin incluir el carácter en este índice. Si se omite, se extrae hasta el final de la cadena.

// Ejemplos de uso

// 1. Extraer una subcadena con start y end
// Extrae los caracteres desde el índice start hasta end - 1.

let texto = "JavaScript";
let subcadena = texto.substring(0, 4);
console.log(subcadena);
// Salida: "Java"

// 2. Extraer desde un índice hasta el final
// Si solo se pasa el índice start, se extrae desde ese punto hasta el final de la cadena.

let text = "JavaScript";
let subcaden = text.substring(4);
console.log(subcadena); // Salida: "Script"

// 4. Extraer solo un carácter
// Para extraer un solo carácter, se usa start y end en el mismo índice + 1.

let tex = "JavaScript";
let caracter = tex.substring(4, 5);
console.log(caracter);
// Salida: "S"
