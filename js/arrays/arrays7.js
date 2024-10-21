// - Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const num = parseFloat(prompt("Ingrese un numero para ver su tabla : "));

function mostrartabla(numero) {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i} <br>`;
  }
  return resultado;
}

document.write(
  `la tabla del numero ingresado es :  <br> ${mostrartabla(num)} `
);
