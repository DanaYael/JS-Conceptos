// Crea script para generar pirámide siguiente con los números
// del 1 al número que indique el usuario (no mayor de 50)

let numero = parseInt(prompt("Ingrese el numero : "));

if (numero >= 0 && numero < 51) {
  for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += i;
    }
    console.log(fila);
  }
} else {
  alert("numero no valido");
}
