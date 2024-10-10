// Calculadora Básica: Crea un programa que funcione como una calculadora básica. El programa debe pedir al usuario que ingrese dos números y luego que elija una operación entre suma, resta, multiplicación o división.
// Usa switch para realizar la operación correspondiente y mostrar el resultado al usuario.

const num1 = parseInt(prompt("ingrese el primero numero"));
const operador = prompt("ingrese un operador (+,-,*,/)").toLowerCase();
const num2 = parseInt(prompt("ingrese el primero numero"));
let resultado;
switch (operador) {
  case "-":
    resultado = num1 - num2;
    break;
  case "+":
    resultado = num1 + num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num1 / num2;
    break;
}

alert("El resultado es: " + resultado);
