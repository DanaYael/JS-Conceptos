// -------------------------------P O P--------------------------

// El método pop() elimina el último elemento de un array y Lo Devuelve. Este método cambia la longitud del array.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// -------------------------------S H I F T()--------------------------

// El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array. LO MISMO Q EL POP PERO ELIMINA Y DEVUELCE EL PRIMERO

var miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

console.log("miPescado antes: " + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log("miPescado después: " + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log("Elemento eliminado: " + eliminado);
// "Elemento eliminado: ángel"

// -------------------------------P U S H ()--------------------------
// El método push() Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4 (muestra cantidad de elementos)

// -------------------------------R I V E R S E ()--------------------------

// El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]

// -------------------------------U N -S H I F T()--------------------------

// El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

// -------------------------------S O R T --------------------------

// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable.
// El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor

// 2. Ordenar números (sin función comparadora)
// Cuando ordenamos un array de números sin una función comparadora,
// l método .sort() convierte cada número en una cadena y luego los compara por sus valores Unicode.
// Es por eso que el número 10 aparece antes que 2, ya que el primer carácter de "10" (1) viene antes que "2" en Unicode.

const punto = [1, 10, 2, 21];
puntos.sort();
console.log(puntos); // Salida: [1, 10, 2, 21]

// Uso de la función comparadora para ordenar números correctamente
const puntos = [1, 10, 2, 21];
puntos.sort((a, b) => a - b);
console.log(puntos); // Salida: [1, 2, 10, 21]

// (a, b) => b - a indica un orden descendente, colocando los valores mayores primero.
// (a, b) => a - b indica un orden ascendente, colocando los valores menores primero.
