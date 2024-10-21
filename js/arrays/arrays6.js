// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a+b)

const ValorLado1 = parseFloat(
  prompt("Ingrese el valor del primer lado de un rectangulo : ")
);
const ValorLado2 = parseFloat(
  prompt("Ingrese el valor del segundo lado de un rectangulo : ")
);

function calcularPerimetro(ValorLado1, ValorLado2) {
  return 2 * (ValorLado2 + ValorLado1);
}

document.write(
  `el perimitro del rectangulo es : ${calcularPerimetro(
    ValorLado1,
    ValorLado2
  )}`
);
