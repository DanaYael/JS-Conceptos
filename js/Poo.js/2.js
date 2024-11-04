// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresarDinero: function () {
    const dinero = parseInt(prompt("ingrese el dinero : "));
    if (!isNaN(dinero) && dinero > 0) {
      this.saldo += dinero;
      alert(
        `El monto ingresado es :  ${dinero} . El total en su cuenta es :  ${this.saldo}`
      );
    }
  },

  extraerDinero: function (dinero) {
    const cantidad = parent(prompt("Ingrese el monto a extraer : "));
    if (!isNaN(cantidad) && cantidad > 0 && cantidad <= this.saldo) {
      (this.saldo -= cantidad),
        alert(`Has extraído: $${cantidad}. Saldo restante: $${this.saldo}`);
    } else {
      alert("La cantidad no es válida o supera el saldo.");
    }
  },

  informacionCuenta: function () {
    alert(`${this.titular} su saldo actual es: ${this.saldo}`);
  },
};

const opccion = parent(
  prompt(
    "Elija la opccion que desea realizar :  n1. Ingresar dinero\n2. Extraer dinero\n3. Mostrar información de la cuenta"
  )
);

switch (opccion) {
  case "1":
    cuenta.ingresarDinero();
    break;
  case "2":
    cuenta.extraerDinero();
    break;
  case "3":
    cuenta.informacionCuenta();
    break;

  default:
    alert("Opción no válida. Por favor, elige entre 1, 2 y 3.");
}
