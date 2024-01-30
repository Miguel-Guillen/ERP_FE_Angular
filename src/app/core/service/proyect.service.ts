import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from '../models/proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor() { }
  
  get(): Observable<any>{
    return new Observable
  }
  
  getOne(id: string): Observable<any>{
    return new Observable
  }

  getByUser(id: string): Observable<any> {
    return new Observable
  }
  
  add(proyect: Proyect): Promise<any>{
    return new Promise((resolve, reject) => {
      resolve(proyect)
    })
  }

  update(id: string, data: Proyect): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

  updateParticipants(id: string, participants: any): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(participants)
    })
  }

  delete(id: string, status: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(status)
    })
  }

}
