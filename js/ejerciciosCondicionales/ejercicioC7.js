// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
const num3 = parseInt(prompt("ingrese el tercer numero"));

let mayor;

if (num1 >= num2 && num1 >= num3) {
  mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
  mayor = num2;
} else {
  mayor = num3;
}

document.write(" el mayor es el numero " + mayor);
