"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    /*     nombre: string;
        raza: string;
        constructor(nombre: string, raza: string) {
            this.nombre = nombre;
            this.raza = raza;
        } */
    //private, public, protecte
    function Animal(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(Animal.prototype, "nombre", {
        get: function () {
            return "[gato cool: " + this._nombre + "]";
        },
        /*    setNombre(nombre:string): void {
               this._nombre = nombre;
           }
       
           getNombre():string {
               return this._nombre;
           } */
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.error("Nombre muy corto!!", nombre.length);
                return;
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
