// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
//  cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudad;
const ciudades = [];

while (true) {
  ciudad = prompt(
    "Escribe las ciudades que has visitado (o presiona Cancelar para terminar):"
  );
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}

document.write("Las ciudades ingresadas son: " + ciudades.join(", "));

document.write(`
  <p>Elemento de Primera posición: ${ciudades[0]}</p>
  <p>Elemento de Tercera posición: ${
    ciudades[2] || "No hay suficiente información"
  }</p>
  <p>Elemento de Última posición: ${ciudades[ciudades.length - 1]}</p>
`);

ciudades.push("Paris");

document.write(`
  <p>El último elemento agregado es: ${ciudades[ciudades.length - 1]}</p>
`);

document.write(`<p> Las ciudades ingresadas son: " ${ciudades.join(", ")}<p>`);

document.write(
  `<p> Las ciudad en la Segunda posicion es : " ${ciudades[2]}<p>`
);

ciudades.splice(1, 1, "Barcelona");

document.write(`<p> Las ciudades ingresadas son: " ${ciudades.join(", ")}<p>`);
