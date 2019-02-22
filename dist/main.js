"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelo/animal/gato");
var gato;
gato = new gato_1.Gato("Pancho", "chusco");
console.log('gato: ', gato);
gato.desplazar();
//Conversion de tipo (Casting)
gato.ronronear(); //convirtiendo la variable de tipo Animal a Gato.
gato.nombre = 'Tom';
console.log('gato.nombre: ', gato.nombre);
gato.ronronear(); //Otra forma de convertir la variable de tipo Animal a Gato.
