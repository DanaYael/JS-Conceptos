// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  color: "negro",
  kilometros: "0km",
  modele: "punto",
  marca: "fiat",

  encender: function () {
    return document.write("el auto esta encendido");
  },

  apagar: function () {
    return document.write("el auto esta apagado");
  },
};
auto.encender();
document.write("<br>");
auto.apagar();
