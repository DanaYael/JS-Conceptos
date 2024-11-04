// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
  constructor(nombre, edad, profecion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profecion = profecion;
  }

  saludar() {
    return `hola , ${this.nombre}`;
  }

  despedirse() {
    return `hasta luego ${this.nombre}`;
  }
}

const persona1 = new Persona("Nely", "33", "periodista");
const persona2 = new Persona("Fatima", "45", "nadadora");

console.log(persona1.saludar());
console.log(persona1.despedirse());

console.log(persona2.saludar());
console.log(persona2.despedirse());
