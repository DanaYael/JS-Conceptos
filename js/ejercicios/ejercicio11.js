const num = parseInt(prompt("Ingrese un número"));

if (num % 2 === 0) {
  document.write("El número ingresado " + num + " es divisible por 2.");
} else if (num % 3 === 0) {
  document.write("El número ingresado " + num + " es divisible por 3.");
} else if (num % 5 === 0 && num % 2 === 0) {
  document.write("El número ingresado " + num + " es divisible por 5 y 2");
} else if (num % 7 === 0) {
  document.write("El número ingresado " + num + " es divisible por 7.");
} else {
  document.write(
    "El número ingresado " + num + " no es divisible por 2, 3, 5 o 7."
  );
}
