// 3-Escribe una clase que permita crear distintos objetos “rectángulos”,
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularArea() {
    return this.alto * this.ancho;
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  mostrarPropiedades() {
    return `Alto : ${this.alto} , Ancho : ${this.ancho}`;
  }

  modificarPropiedades(nuevoAlto, nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
  }
}

function crearRectanguloDesdeInput() {
  const ancho = parseFloat(prompt("Ingresa el ancho : "));
  const alto = parseFloat(prompt("Ingresa el alto : "));
  if (isNaN(ancho) || isNaN(alto)) {
    alert("ingrese un numero valido");
  }
  return new rectangulo(alto, ancho);
}

const miRectangulo = crearRectanguloDesdeInput();
console.log(miRectangulo.mostrarPropiedades());

if (miRectangulo) {
  document.write(`<p>${miRectangulo.mostrarPropiedades()}</p>`); // Muestra las propiedades del rectángulo en pantalla
  document.write(`<p>Área: ${miRectangulo.calcularArea()}</p>`); // Muestra el área en pantalla
  document.write(`<p>Perímetro: ${miRectangulo.calcularPerimetro()}</p>`); // Muestra el perímetro en pantalla

  // Modificar dimensiones si se desea
  const nuevoAlto = parseFloat(prompt("Ingrese el nuevo alto del rectángulo:"));
  const nuevoAncho = parseFloat(
    prompt("Ingrese el nuevo ancho del rectángulo:")
  );

  if (!isNaN(nuevoAlto) && !isNaN(nuevoAncho)) {
    miRectangulo.modificarPropiedades(nuevoAlto, nuevoAncho);
    document.write(
      `<p>Nuevas dimensiones: ${miRectangulo.mostrarPropiedades()}</p>`
    ); // Muestra las nuevas propiedades en pantalla
    document.write(`<p>Nuevo Área: ${miRectangulo.calcularArea()}</p>`); // Muestra el nuevo área en pantalla
    document.write(
      `<p>Nuevo Perímetro: ${miRectangulo.calcularPerimetro()}</p>`
    ); // Muestra el nuevo perímetro en pantalla
  }
}
