// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
const texto = prompt("Ingrese el texto : ");
let primerVocal = -1;
let vocalEncontrada = "";

for (let i = 0; i < texto.length; i++) {
  let letra = texto[i].toLowerCase();

  if (letra === "a" || letra === "o" || letra === "u" || letra === "e") {
    primerVocal = i + 1;
    vocalEncontrada = texto[i];
    break;
  }
}

if (primerVocal === -1) {
  alert("No se encontró ninguna vocal.");
} else {
  alert(`La vocal "${vocalEncontrada}" está en la posición: ${primerVocal}`);
}

// ¿Por qué se usa -1?
// Cuando empiezas a buscar vocales en el texto, no sabes aún si hay alguna, por eso primerVocal comienza en -1,
// indicando que no se ha encontrado ninguna.
// En lugar de -1, podrías usar cualquier valor que no sea una posición válida, pero en la programación es común usar -1 para representar
// una ausencia o "no encontrado".

// ¿Por qué sumar 1?
// El + 1 en primerVocal = i + 1 es para ajustar la posición que se muestra al usuario.
// En JavaScript (y en muchos lenguajes de programación), los índices de los caracteres de una cadena comienzan desde 0.
// Esto significa que la primera letra de un texto tiene el índice 0, la segunda tiene el índice 1, y así sucesivamente.
// cuando mostramos la posición al usuario, la gente suele contar desde 1, no desde 0. Así que al sumar 1 a la posición (i + 1),
// estamos haciendo que la posición sea más comprensible para el usuario.
// Ejemplo:
// Si la primera vocal en la palabra "hola" es la 'o', su índice es 1 en el array, pero para el usuario sería la segunda letra, por eso le sumamos 1.
