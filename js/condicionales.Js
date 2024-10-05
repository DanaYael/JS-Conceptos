// const edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 1 && edad <= 105) {
//   //aqui continuo con el programa
//   console.log("aqui sigo con mi programa");
//   if ((edad >= 16 && edad <= 17) || edad > 70) {
//     document.write("Es optativo que votes");
//   } else if (edad >= 18 && edad <= 70) {
//     document.write("Es obligatorio votar");
//   } else {
//     document.write("No peudes votar");
//   }
// } else {
//   alert("Ingresaste un valor invalido ");
// }

// ---NOTAS---

// const nota = parseInt(prompt("Ingrese su nota"));

// if (isNaN(nota)) {
//   document.write("Por favor ingrese un número válido");
// } else if (nota >= 90 && nota <= 100) {
//   document.write("Excelente");
// } else if (nota >= 70 && nota < 90) {
//   document.write("Bueno");
// } else if (nota >= 50 && nota < 70) {
//   document.write("Regular");
// } else if (nota >= 0 && nota < 50) {
//   document.write("Insuficiente");
// } else {
//   document.write("Nota no válida");
// }

// ---CALCULADORA---

// const numero1 = parseInt(prompt("Ingrese un numero "));
// const operador = prompt("ingrese su operacion logica ( + , - , * / )");
// const numero2 = parseInt(prompt("Ingrese el segundo valor numerico "));
// if (operador == "+") {
//   document.write(numero1 + numero2);
// } else if (operador == "-") {
//   document.write(numero1 - numero2);
// } else if (operador == "*") {
//   document.write(numero1 * numero2);
// } else if (operador == "/") {
//   document.write(numero1 / numero2);
// } else document.write("La operacion es invalida");

// ----COMPARADOR DE NUMEROS--

const num1 = parseInt(prompt("Ingrese primer numero "));
const num2 = parseInt(prompt("Ingrese el segundo numero "));
if (num1 > num2) {
  document.write(`El primer numero ${num1} es mayor que ${num2} `);
} else if (num1 < num2) {
  document.write(`El primer numero ${num1} es menor que ${num2} `);
} else {
  document.write(`El primer numero ${num1} y el segundo ${num2} son iguales`);
}
