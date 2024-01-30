import { TypeAreas, TypeUsers } from '../enums/employee.enum';

export class Employee {
    id?: number;
    nombre: string;
    apellidos: string;
    area: TypeAreas;
    puesto: string;
    email: string;
    contrasena: string;
    imagen?: string;
    rol: TypeUsers;
    estado: boolean;
    ingreso?: Date;

    constructor(){
        this.nombre = "",
        this.apellidos = "";
        this.area = TypeAreas.Select;
        this.puesto = "";
        this.email = "";
        this.contrasena = "";
        this.rol = TypeUsers.Select;
        this.ingreso = new Date();
        this.estado = true;
    }
}

export interface EmployeeItem {
    id?: number;
    nombre: string;
    apellidos: string;
    area: TypeAreas;
    puesto: string;
    email: string;
    contrasena: string;
    imagen?: string;
    rol: TypeUsers;
    estado: boolean;
    ingreso: Date;
}