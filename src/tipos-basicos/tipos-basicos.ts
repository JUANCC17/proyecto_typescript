let numeroEstudiantes: number;

// numeroEstudiantes = 40;

// console.log('numeroEstudiantes',numeroEstudiantes);   

let nombreCurso: string;
let contenidoCurso: string;
let mi_var: string; 
nombreCurso = 'Angular desde Cero';
contenidoCurso = `
Herramientas de Desarrollo
Introduccion a Typescript
Introduccion a Angular
`;

console.log('Curso:', nombreCurso);
console.log('Contenido:', contenidoCurso);

let bienvenida:string ;

bienvenida = `Bienvenido al curso ${nombreCurso}`;

console.log('',bienvenida);

let arregloA:number[] = [1,2,3,4];
let arregloB: Array<string>;

arregloB = ['a','b','c'];

console.log('Arreglo A:',arregloA);
console.log('Arreglo B:',arregloB);

enum DiaCurso {MARTES, VIERNES};
enum DiasSemana {LUNES,MARTES,MIERCOLES,JUEVES,VIERNES};

let primerDia: DiaCurso;

primerDia = DiaCurso.MARTES;

console.log('primerDia: ',primerDia);
console.log('primerDia:', DiaCurso[0]);
console.log('primerDia:', DiaCurso[DiaCurso.MARTES]);

const PI = 3.14;


const PERSONA:any = {
    nombre: 'Juan',
    curso: 'Angular'
}

console.log('PERSONA',PERSONA);

PERSONA.nombre = 'Luis';
PERSONA.curso = 'AngularJS';

console.log('PERSONA',PERSONA);
/*Funciones */
function holaMundo(): string {
    return 'Hola Mundo';
}

function saludar(mensaje:string): void {
    console.log('saludo: ',mensaje);
}

saludar('Iniciando Curso de Angular');
console.log(holaMundo());
/*Fin */






