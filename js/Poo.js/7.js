// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
class Contacto {
  constructor(nombre, apellido, telefono) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._telefono = telefono;
  }

  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get telefono() {
    return this._telefono;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set apellido(nuevoApellido) {
    this._apellido = nuevoApellido;
  }

  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }

  esIgual(contacto) {
    return this._nombre === contacto.nombre;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  anadirContacto(contacto) {
    if (!this.agendaLlena()) {
      if (!this.existeContacto(contacto)) {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} añadido.`);
      } else {
        console.log(`El contacto ${contacto.nombre} ya existe.`);
      }
    } else {
      console.log("La agenda está llena.");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.esIgual(contacto));
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      console.log("La agenda está vacía.");
    } else {
      console.log("Lista de contactos:");
      this.contactos.forEach((contacto) => {
        console.log(
          `Nombre: ${contacto.nombre} ${contacto.apellido}, Teléfono: ${contacto.telefono}`
        );
      });
    }
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(`El teléfono de ${nombre} es: ${contacto.telefono}`);
    } else {
      console.log(`El contacto ${nombre} no existe.`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.esIgual(contacto));
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log(`Contacto ${contacto.nombre} eliminado.`);
    } else {
      console.log(`Contacto ${contacto.nombre} no encontrado.`);
    }
  }
}

// Ejemplo de uso con un menú interactivo
function ejecutarAgenda() {
  const agenda = new Agenda();
  let opcion;

  do {
    opcion = prompt(
      "Seleccione una opción:\n" +
        "1. Añadir contacto\n" +
        "2. Ver contactos\n" +
        "3. Buscar contacto\n" +
        "4. Eliminar contacto\n" +
        "5. Huecos libres\n" +
        "0. Salir"
    );

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const apellido = prompt("Ingrese el apellido del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, apellido, telefono);
        agenda.anadirContacto(nuevoContacto);
        break;

      case "2":
        agenda.listarContactos();
        break;

      case "3":
        const buscarNombre = prompt("Ingrese el nombre del contacto:");
        agenda.buscarContacto(buscarNombre);
        break;

      case "4":
        const eliminarNombre = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoAEliminar = new Contacto(eliminarNombre, "", "");
        agenda.eliminarContacto(contactoAEliminar);
        break;

      case "5":
        console.log(`Huecos libres: ${agenda.huecosLibres()}`);
        break;

      case "0":
        console.log("Saliendo de la agenda.");
        break;

      default:
        console.log("Opción no válida.");
        break;
    }
  } while (opcion !== "0");
}

ejecutarAgenda();

const agenda = new Agenda();

const contacto1 = new Contacto("Dana", "Albornoz", "2236018685");
const contacto2 = new Contacto("Daniela", "Fernández", "223596185");

// Agregar contactos a la agenda
agenda.anadirContacto(contacto1);
agenda.anadirContacto(contacto2);

// Listar contactos
agenda.listaContactos();

// Buscar un contacto
agenda.buscarContacto("Dana");

// Eliminar un contacto
agenda.eliminarContacto(contacto2);

// Verificar huecos libres
console.log(`Huecos libres: ${agenda.huecosLibres()}`);
