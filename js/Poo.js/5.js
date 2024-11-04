// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anionacimento) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.DNI = DNI),
      (this.sexo = sexo),
      (this.peso = peso),
      (this.altura = altura),
      (this.nacimento = anionacimento);
  }

  mostrarGeneracion() {
    for (let [generacion, datos] of Object.entries(Persona.generaciones)) {
      if (this.nacimento >= datos.inicio && this.nacimento <= datos.fin) {
        return ` Pertenece a la ${generacion} cuyo rasgo caracteristico es ${datos.rasgo}`;
      }
    }
    return "generacion no identificada";
  }
  mostrarDatos() {
    return `<ul>
      <li>Edad: ${this.edad}</li>
      <li>DNI: ${this.DNI}</li>
      <li>Sexo: ${this.sexo}</li>
      <li>Peso: ${this.peso} kg</li>
      <li>Altura: ${this.altura} m</li>
      <li>Año de Nacimiento: ${this.nacimento}</li>
    </ul>`;
  }
  esMayorDeEDAD() {
    return this.edad >= 18
      ? `${this.nombre} es mayor de edad`
      : `${this.nombre} es menor de edad`;
  }

  generarDNI() {
    return Math.floor(Math.random() + 90000000) + 10000000;
  }

  static generaciones = {
    GeneracionZ: {
      inicio: 1994,
      fin: 2010,
      poblacion: "7.800.00",
      circunstancia: "expancion de internet",
      rasgo: "irreverencia",
    },
    Milennials: {
      inicio: 1981,
      fin: 2093,
      poblacion: "7.200.00",
      circunstancia: "inicio de digilitacion",
      rasgo: "frustracion",
    },
    GeneracionX: {
      inicio: 1969,
      fin: 1980,
      poblacion: "9.300.00",
      circunstancia: "crisis el 73 y transicion española",
      rasgo: "obsecion exito",
    },
    "Baby Boom": {
      inicio: 1944,
      fin: 1968,
      poblacion: "12.200.00",
      circunstancia: "paz ",
      rasgo: "ambicion",
    },
    "Silent Generetion": {
      inicio: 1930,
      fin: 1948,
      poblacion: "6.300.00",
      circunstancia: "conflictos belicos",
      rasgo: "austeridad",
    },
  };
}

// creando persona
const persona1 = new Persona(
  "Dana",
  28,
  "38831362",
  "femenino",
  54,
  "1.60",
  "1993"
);

// Mostrar datos de la persona y su generación
document.write(persona1.mostrarDatos());
document.write(`<p>${persona1.mostrarGeneracion()}</p>`);
document.write(`<p>${persona1.esMayorDeEDAD()}</p>`);
