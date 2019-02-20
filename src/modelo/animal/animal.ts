class Animal {
    /*     nombre: string;
        raza: string;
        constructor(nombre: string, raza: string) {
            this.nombre = nombre;
            this.raza = raza;
        } */
    //private, public, protecte
    constructor(protected _nombre:string) {
    }

 /*    setNombre(nombre:string): void {
        this._nombre = nombre;
    }

    getNombre():string {
        return this._nombre;
    } */
    
    set nombre(nombre:string) {
        this._nombre = nombre;
    }

    get nombre():string {
        return this._nombre;
    }
}