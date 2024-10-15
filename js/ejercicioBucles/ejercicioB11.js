// 11- Realiza un script que pida por teclado 3 edades
// y 3 nombres e indique el nombre del mayor. *

let edad1 = parseInt(prompt("Ingrese la primera edad : "));
let nombre1 = prompt("Ingreseel primer nombre : ");

let edad2 = parseInt(prompt("Ingrese la segunda edad : "));
let nombre2 = prompt("Ingrese el segundo nombre : ");

let edad3 = parseInt(prompt("Ingrese la tercer edad : "));
let nombre3 = prompt("Ingrese el tercer nombre: ");

let edadMayor = Math.max(edad1, edad2, edad3);
let nombreMayor;

if (edadMayor === edad1) {
  nombreMayor = nombre1;
} else if (edadMayor === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

alert(
  "La persona mas grande en edad es : " +
    nombreMayor +
    " con " +
    edadMayor +
    "años"
);
