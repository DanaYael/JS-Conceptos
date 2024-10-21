// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const datos = prompt(parseInt("ingrese un numero entero : "));

function numeroEntero(num) {
  if (isNaN(num)) {
    return "El valor ingresado no es un número.";
  }
  if (num % 2 === 0) {
    return "El resultado es par";
  } else {
    return "El resultado es impar";
  }
}

document.write(numeroEntero(datos));
