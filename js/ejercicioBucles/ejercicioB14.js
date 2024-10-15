// 4- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo –
// entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const texto = prompt("Ingrese el texto : ");
let resultado = "";

for (let i = 0; i <= texto.length; i++) {
  resultado += texto[i];

  if (i < texto.length - 1) {
    resultado += "-";
  }
}
document.write(`El texto con guiones es: ${resultado}`);
