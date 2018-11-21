import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "./authentication.service";
import {Pet} from "../model/pet";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://petshopapp-mg.azurewebsites.net/api/users';

  constructor(private http: HttpClient) { }

  addUsers(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

}
