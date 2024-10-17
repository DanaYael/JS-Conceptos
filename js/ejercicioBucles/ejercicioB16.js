// 6- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
const texto = prompt("Ingrese el texto : ");
let resultadoAlrevez = "";

for (let i = texto.length - 1; i > 0; i--) {
  resultadoAlrevez += texto[i];
}
Alert(`El texto invertido  es: ${resultadoAlrevez}`);
