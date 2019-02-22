import { Animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";
let gato: Animal;

gato = new Gato("Pancho", "chusco");
console.log('gato: ', gato);
gato.desplazar();
//Conversion de tipo (Casting)
(gato as Gato).ronronear(); //convirtiendo la variable de tipo Animal a Gato.
gato.nombre = 'Tom';
console.log('gato.nombre: ', gato.nombre);
(<Gato>gato).ronronear(); //Otra forma de convertir la variable de tipo Animal a Gato.
