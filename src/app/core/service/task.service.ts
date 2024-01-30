import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  get(): Observable<any>{
    return new Observable
  }
  
  getOne(id: string): Observable<any>{
    return new Observable
  }
  
  getByProject(id: string): Observable<any>{
    return new Observable
  }
  
  getByUser(id: number): Observable<any>{
    return new Observable
  }

  add(task: Task): Promise<any>{
    return new Promise((resolve, reject) => {
      resolve(status)
    })
  }

  update(id: string, data: Task): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(status)
    })
  }

  delete(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(status)
    })
  }
}
