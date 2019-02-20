"use strict";
var numeroEstudiantes;
// numeroEstudiantes = 40;
// console.log('numeroEstudiantes',numeroEstudiantes);   
var nombreCurso;
var contenidoCurso;
var mi_var;
nombreCurso = 'Angular desde Cero';
contenidoCurso = "\nHerramientas de Desarrollo\nIntroduccion a Typescript\nIntroduccion a Angular\n";
console.log('Curso:', nombreCurso);
console.log('Contenido:', contenidoCurso);
var bienvenida;
bienvenida = "Bienvenido al curso " + nombreCurso;
console.log('', bienvenida);
var arregloA = [1, 2, 3, 4];
var arregloB;
arregloB = ['a', 'b', 'c'];
console.log('Arreglo A:', arregloA);
console.log('Arreglo B:', arregloB);
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["MARTES"] = 0] = "MARTES";
    DiaCurso[DiaCurso["VIERNES"] = 1] = "VIERNES";
})(DiaCurso || (DiaCurso = {}));
;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["LUNES"] = 0] = "LUNES";
    DiasSemana[DiasSemana["MARTES"] = 1] = "MARTES";
    DiasSemana[DiasSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiasSemana[DiasSemana["JUEVES"] = 3] = "JUEVES";
    DiasSemana[DiasSemana["VIERNES"] = 4] = "VIERNES";
})(DiasSemana || (DiasSemana = {}));
;
var primerDia;
primerDia = DiaCurso.MARTES;
console.log('primerDia: ', primerDia);
console.log('primerDia:', DiaCurso[0]);
console.log('primerDia:', DiaCurso[DiaCurso.MARTES]);
var PI = 3.14;
var PERSONA = {
    nombre: 'Juan',
    curso: 'Angular'
};
console.log('PERSONA', PERSONA);
PERSONA.nombre = 'Luis';
PERSONA.curso = 'AngularJS';
console.log('PERSONA', PERSONA);
/*Funciones */
function holaMundo() {
    return 'Hola Mundo';
}
function saludar(mensaje) {
    console.log('saludo: ', mensaje);
}
saludar('Iniciando Curso de Angular');
console.log(holaMundo());
/*Fin */
