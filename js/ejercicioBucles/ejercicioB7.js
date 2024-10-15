// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

const num = parseInt(prompt("Ingrese un número no mayor a 50:"));

if (num > 0 && num <= 50) {
  for (let i = num; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += i;
    }
    console.log(fila);
  }
} else {
  console.log("Por favor, ingrese un número válido entre 1 y 50.");
}
