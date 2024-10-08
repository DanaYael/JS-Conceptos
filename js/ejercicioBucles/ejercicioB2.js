// 2- Escribir un programa que solicite una nota (número) de 0  a 10.
//  Luego mostrar la calificación en un alert según los siguientes rangos de nota

const nota = parseInt(prompt("ingrese su nota de 0 a 10"));
if (isNaN(nota) || nota > 10 || nota <= 0) {
  alert("ingrese un numero valido entre 0 y 10");
} else {
  switch (Math.floor(nota)) {
    case 0:
    case 1:
    case 2:
      alert("muy deficiente");
      break;
    case 3:
    case 4:
      alert("insuficiente");
      break;
    case 5:
    case 6:
      alert("suficiente");
      break;
    case 7:
      aler("bueno");
    case 9:
    case 8:
      alert("notable");
      break;
    case 10:
      alert("exelente");
      break;
    default:
      alert("nota fuera de rango");
  }
}
