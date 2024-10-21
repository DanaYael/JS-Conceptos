// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
//  cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudad;
const ciudades = [];
let ultimoElemento;

while (true) {
  ciudad = prompt(
    "Escribe las ciudades que has visitado (o presiona Cancelar para terminar):"
  );
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}

document.write(`
  <p>Las ciudades ingresadas son:</p>
  <ul>
      ${ciudades.map((ciudad) => `<li>${ciudad}</li>`).join("")}
  </ul>
`);

document.write(`<p>Las ciudades especificas son :</p>

 <ul>
  <li>Elemento de Primera posición: ${ciudades[0]}</li>
  <li>Elemento de Tercera posición: ${
    ciudades[2] || "No hay suficiente información"
  }
    </li>
  <li>Elemento de Última posición: ${ciudades[ciudades.length - 1]}</li>
 <ul>

`);

ultimoElemento = ciudades.push("Paris");

document.write(`
  <p>El último elemento agregado es: ${ciudades[ciudades.length - 1]}</p>
`);

document.write(`
  <p>Las ciudades ingresadas son:</p>
  <ul>
      ${ciudades.map((ciudad) => `<li>${ciudad}</li>`).join("")}
  </ul>
`);

document.write(
  `<p> Las ciudad en la Segunda posicion es : " ${ciudades[1]}<p>`
);

ciudades.splice(1, 1, "Barcelona");

document.write(`
  <p>Las ciudades ingresadas son:</p>
  <ul>
      ${ciudades.map((ciudad) => `<li>${ciudad}</li>`).join("")}
  </ul>
`);
