import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArea } from '../models/area';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  get(): Observable<IArea[]>{
    const url = `Areas/`;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.get<IArea[]>(this.API + url, { headers });
  }

  getOne(id: string): Observable<any>{
    const url = `Areas/` + id;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.get<IArea>(this.API + url, { headers });
  }

  add(area: IArea){
    const url = `Areas/`;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.post(this.API + url, area, { headers });
  }

  update(id: string, area: IArea){
    const url = 'Areas/' + id;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.put(this.API + url, area, { headers }).toPromise();
  }

  delete(id: number){
    const url = 'Areas/' + id;
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.http.delete(this.API + url, { headers });
  }
}
