import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName : 'João',
        lastName : 'Gabriel',
        age : 22
      },
      {
        firstName : 'Claudio',
        lastName : 'Roberto',
        age : 25
      },
      {
        firstName : 'Carla',
        lastName : 'Silveira',
        age : 33
      },
      {
        firstName : 'Claudia',
        lastName : 'Botelho',
        age : 23
      }
    ]
    return of (peopleArray)
}
}