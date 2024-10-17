// - Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("ingrese una texto : ");
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
  let letra = texto[i].toLowerCase();

  if (letra === "a" || letra === "o" || letra === "u" || letra === "e") {
    contadorVocales++;
  }
}

alert("El número de vocales es: " + contadorVocales);
