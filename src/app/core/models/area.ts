export interface IArea {
    id?: number,
    nombre: string,
    descripcion: string;
    jefe: number
}

export class Area {
    id?: number;
    nombre: string;
    descripcion: string;
    jefe: number;

    constructor(){
        this.nombre = '';
        this.descripcion = '';
        this.jefe = 0;
    }
}