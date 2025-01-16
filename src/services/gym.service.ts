import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class GymService {
private url='https://localhost:7003/api/Client'

clients$ : Observable<Client[]>=new Observable<Client[]>;
  constructor(private http:HttpClient) { }

  getClients():Observable<Client[]> { 
    return this.http.get<Client[]>(this.url);
  };
  
  addClient(client:Client){
    return this.http.post<Client>(this.url,client);
  }

}
