// -----------metodo sqrt-----------

// La raíz cuadrada del número proporcionado. Si los números son negativos, NaN es devuelto.

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN

// ------------------Math.cbrt()--------------

// La raíz cubica del numero proporcionado

// -------------------Math.max()-----------Math.min()devuelve el mas chico

// La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada,
// o NaN si cualquier parámetro no es un número y no puede ser convertido en uno.

console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3

return Math.random() * (max - min) + min;

// La función Math.random() devuelve un número aleatorio de coma flotante,
// comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1),
// con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

// redondeo hacia abajo
return Math.floor(Math.random() * (max - min) + min);

// ------------------Math.trunc()--------------

// La función Math.trunc() devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma).

Math.trunc(13.37); // 13
Math.trunc(42.84); // 42

// ------------------Math.roun()--------------

// Valor de Retorno
// El valor del número dado redondeado al entero más cercano.

// Retorna el valor 20
x = Math.round(20.49);

// Retorna el valor -21
x = Math.round(-20.51);
