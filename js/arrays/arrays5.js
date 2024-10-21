// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena contiene mayusculas";
  }
  if (cadena === cadena.toLowerCase()) {
    return "La cadena contiene minusculas";
  }

  return "La cadena contiene mayusculas y minusculas";
}

const texto1 = prompt("ingrese un texto:");

document.write(analizarCadena(texto1));
