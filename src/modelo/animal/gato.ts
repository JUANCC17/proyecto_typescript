class Gato extends Animal {
    constructor(nombre:string) {
        super(nombre);
    }

    desplazar():void{
        console.log(`${this._nombre} camina lentamente`);
    }
}