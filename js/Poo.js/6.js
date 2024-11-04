// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(ISBN, titulo, autor, numeroPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroPaginas = numeroPaginas;
  }

  // Métodos get
  get ISBN() {
    return this._ISBN;
  }
  get titulo() {
    return this._titulo;
  }
  get autor() {
    return this._autor;
  }
  get numeroPaginas() {
    return this._numeroPaginas;
  }

  // Métodos set

  set ISBN(nuevoISBN) {
    this.ISBN = nuevoISBN;
  }
  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }
  set autor(nuevoAuthor) {
    this._autor = nuevoAuthor;
  }
  set numeroPaginas(nuevoNumPag) {
    this._numeroPaginas = nuevoNumPag;
  }
  mostrarLibro() {
    document.write(
      `El libro : ${this.titulo} con ISBN ${this.ISBN} creado por el author : ${this.autor} tiene  ${this.numeroPaginas} paginas <br>`
    );
  }
}

const libro1 = new Libro(1234, "Orgullo y Prejuicio", "SHOTJ", "230 ");
const libro2 = new Libro(
  1234,
  "100 ANOS DE SOLEDAD",
  "Gabriel Garcia Marquez",
  "260"
);

if (libro1.numeroPaginas > libro2.numeroPaginas) {
  console.log(`"${libro1.titulo}" tiene más páginas.`);
} else if (libro1.numeroPaginas < libro2.numeroPaginas) {
  console.log(`"${libro2.titulo}" tiene más páginas.`);
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
}

console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());
