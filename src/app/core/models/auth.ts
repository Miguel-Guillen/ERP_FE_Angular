import { TypeAreas, TypeUsers } from 'src/app/core/enums/employee.enum'

export class Auth {
    
    email: string;
    password: string;

    constructor(){
        this.email = '';
        this.password = '';
    }
}

export class UserAuth {
    id: number;
    area: TypeAreas;
    rol: TypeUsers;
    token: string;

    constructor(){
        this.id = 0;
        this.area = TypeAreas.Select;
        this.rol = TypeUsers.Select;
        this.token = '';
    }
}