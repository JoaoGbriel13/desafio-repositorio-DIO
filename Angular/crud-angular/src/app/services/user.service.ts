import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = "https://sheet.best/api/sheets/5e5edb88-b893-4c4e-93f5-79981c8f9a47"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json',
    })
  }
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  }

  // Cria o usuario do banco 
  
  postUser(user : User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions)
  }

  // Excluir o usuario do banco 

  deleteUser(id : number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`)
  }

  // Edita o usuario 

  updateUser(id : string, user: User) : Observable<User>{
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions)
  }

  // Lista usuario unico
  getUser(id: string) : Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
    

}
