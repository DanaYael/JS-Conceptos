// 3- Escribir un script que simule el lanzamiento de dos dados.
// Hacer uso de la función Math.random para obtener números aleatorios
// entre 1 y 6 para cada uno de los lanzamientos de los dados.
// Sumar el resultado de lanzar dos dados y anotar en un array el número de
// apariciones de dicha suma, repitiendo 50 veces esta operación.

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function lanzarDosDados() {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  return {
    suma: dado1 + dado2,
  };
}

// Array
const frecuencias = new Array(13).fill(0);

for (i = 0; i < 50; i++) {
  const resultado = lanzarDosDados();
  frecuencias[resultado.suma]++;
}

document.write("<h2>Resultados después de 50 lanzamientos:</h2>");
document.write("<ul>");
for (let i = 2; i <= 12; i++) {
  // Las sumas posibles van de 2 a 12
  document.write(`<li>Suma ${i}: apareció ${frecuencias[i]} veces</li>`);
}
document.write("</ul>");

// "suma i" se refiere a la variable i del bucle for que itera sobre todas las sumas posibles de lanzamientos de dos dados (desde 2 hasta 12), y frecuencias[i] utiliza ese mismo valor i para obtener la frecuencia específica de esa suma en el arreglo frecuencias.
