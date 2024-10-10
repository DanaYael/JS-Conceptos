// Clasificación de Edad: Escribe un programa que pida al usuario ingresar su edad y, utilizando switch y condicionales, clasifique al usuario en una de las siguientes categorías: "Niño", "Adolescente", "Adulto" o "Adulto Mayor".

let edad = parseInt(prompt("Ingrese su edad : "));
let respuesta;

switch (true) {
  case edad >= 0 && edad < 13:
    respuesta = " Niño";
    break;

  case edad >= 13 && edad < 19:
    respuesta = " Adolecente";
    break;

  case edad >= 19 && edad < 60:
    respuesta = " Aulto";
    break;

  case edad >= 60 && edad <= 120:
    respuesta = " Adulto Mayor";
    break;
  default:
    respuesta = " Edad no valida";
}

alert("Eres un " + respuesta);

// el switch básico, cada caso compara la variable contra un valor específico, no permite expresiones condicionales.
// switch(true) hace que el switch se convierta en una estructura evaluativa de condiciones y se adapte mejor a los rangos.
