// 4- Realiza un script que pida números hasta que se pulse “cancelar”.
//   Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
//   Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  let entrada = prompt("ingrese un numero(o presione 'cancelar para salir')");

  if (entrada === null) {
    break;
  }

  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("no es un numero valido. Por favor ingrese un numero");
  } else {
    suma += numero;
  }
}
alert("La suma total de los números introducidos es: " + suma);
