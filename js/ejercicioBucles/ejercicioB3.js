let cadenas = "";
let entrada;

while (true) {
  entrada = prompt(
    "ingrese una cadena de texto (o presione 'cancelar' para salir)"
  );
  if (entrada === null) {
    break;
  }
  if (cadenas.length > 0) {
    cadenas = cadenas + "-";
  }
  cadenas = cadenas + entrada;
}

document.write(cadenas);
