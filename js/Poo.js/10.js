// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto {
  constructor(nombreAeropueto) {
    this.nombreAeropueto = nombreAeropueto;
    this.listaDeAvion = [];
  }

  buscarAvion(nombreDeAvion) {
    const avionEncontrado = this.listaDeAviones.find(
      (avion) => avion.nombre.toLowerCase() === nombreDeAvion.toLowerCase()
    );

    if (avionEncontrado) {
      return `INFORMACIÓN DEL AVIÓN:
            Nombre: ${avionEncontrado.nombre}
            Capacidad: ${avionEncontrado.capacidad}
            Destino: ${avionEncontrado.destino}`;
    } else {
      return "No se encontró el avión especificado";
    }
  }

  agregarAvion(avion) {
    this.listaDeAvion.push(avion);
    console.log(
      `El avion ${avion.nombre} ha sido agregado a la lista de aviones`
    );
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaDePasajeros = [];
  }

  // Método para abordar un pasajero
  abordar(nombrePasajero) {
    if (this.listaDePasajeros.length < this.capacidad) {
      this.listaDePasajeros.push(nombrePasajero);
      console.log(`${nombrePasajero} ha abordado el avión ${this.nombre}.`);
    } else {
      console.log(
        `El avión ${this.nombre} está lleno. No se puede abordar a ${nombrePasajero}.`
      );
    }
  }
}

const aeropuertoInternacional = new Aeropuerto("NuevoAeropuerto");

const avion1 = new Avion("dana", "290", "brasil");
const avion2 = new Avion("tito", "430", "ecuador");
const avion3 = new Avion("Fer", "550", "malasia");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

avion1.abordar("florinda Mesa");
avion1.abordar("Melisa Mesa");

for (let i = 0; i < 200; i++) {
  avion1.abordar(`pasajero ${i + 1}`);
}

console.log(avion1.listaDePasajeros);
