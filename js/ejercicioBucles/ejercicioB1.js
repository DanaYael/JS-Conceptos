// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("ingrese su edad"));

if (isNaN(edad)) {
  document.write("no es numero valido");
} else if (edad >= 18) {
  document.write("eres mayor de edad , puedes conducir");
} else {
  document.write("la edad no es valida para conducir");
}
