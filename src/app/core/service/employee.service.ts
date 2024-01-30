import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environment/environment';

import { Employee, EmployeeItem } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  get(status: boolean): Observable<EmployeeItem[]>{
    let url = '';
    if(status) url = `Empleado?estado=false`;
    else url = `Empleado/Baja`;

    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.get<EmployeeItem[]>(this.API + url, { headers });
  }

  getOne(id: string): Observable<any>{
    const url = `Empleado/` + id;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.get<Employee>(this.API + url, { headers });
  }

  add(employee: EmployeeItem){
    const url = 'Empleado';
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.post(this.API + url, employee, { headers });
  }

  update(id: string, employee: Employee){
    const url = 'Empleado/' + id;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.put(this.API + url, employee, { headers }).toPromise();
  }

  delete(id: number): Observable<any> {
    const url = 'Empleado/' + id;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.delete(this.API + url, { headers });
  }

  uploadImage(image: FormData): Observable<any> {
    const url = 'Empleado/SubirImagen';
    const headers = { 'Access-Control-Allow-Origin': '*' }
    return this.http.post(this.API + url, image, { headers }).pipe(
      map((res: any) => res.urlImagen),
      catchError((err: Error) => throwError(err))
    );
  }
}
