//
// Clase base Animal

// Clase base Animal
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "El animal hace un sonido.";
  }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
  emitirSonido() {
    return "Guau Guau"; // Sonido específico del perro
  }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
  emitirSonido() {
    return "Miau Miau"; // Sonido específico del gato
  }
}

// Crear un objeto de la clase Perro llamado Tony
const tony = new Perro("Tony", 3);

// Mostrar en consola el nombre y el sonido que emite
console.log(
  `${tony.nombre} tiene ${tony.edad} años y dice: ${tony.emitirSonido()}`
); // Tony tiene 3 años y dice: Guau Guau
