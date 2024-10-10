// Conversor de Unidades de Longitud:
//  Crea un programa que convierta una medida de longitud ingresada por el usuario.
//  El programa debe solicitar al usuario que ingrese una cantidad en metros y luego elija una
//  opción para convertirla a kilómetros, centímetros, milímetros o pulgadas.
//  Usa switch para manejar las conversiones.

const medidaLongitud = parseInt(prompt("Ingrese una medida en metros"));
let conversion = prompt(
  "Elige una opcion . Convertir a convertirla : 1- kilómetros, 2-centímetros, 3-milímetros , 4-pulgadas."
);
let resultado;

switch (conversion) {
  case "1":
    resultado = medidaLongitud / 1000 + "kilometros";
    break;

  case "2":
    resultado = medidaLongitud * 100 + "Centímetros";
    break;

  case "3":
    resultado = medidaLongitud * 1000 + "Milimetros";
    break;

  case "4":
    resultado = medidaLongitud * 39.37 + "Pulgadas";
    break;
  default:
    alert("Opción no válida");
    break;
}

alert("El resultado es : " + resultado);
