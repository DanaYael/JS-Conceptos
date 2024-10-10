const num = parseInt(prompt("Ingrese un numero no mayor a 50:"));
for (let i = 1; i <= num; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += i;
  }
  console.log(fila);
}
