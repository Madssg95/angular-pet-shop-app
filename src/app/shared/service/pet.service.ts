import {Injectable } from '@angular/core';
import {Pet} from '../model/pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "./authentication.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {

  apiUrl = 'https://petshopapp-mg.azurewebsites.net/api/pets';

  constructor( private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getPets(): Observable<Pet[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet[]>(this.apiUrl, httpOptions);
  }

  addPets(pet: Pet): Observable<Pet> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Pet>(this.apiUrl, pet, httpOptions);
  }

  updatePet(pet: Pet): Observable<Pet> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Pet>(this.apiUrl + '/' + pet.id, pet, httpOptions);
  }

  getPetById(id: Number): Observable<Pet> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet>(this.apiUrl + '/' + id, httpOptions);
  }
  deletePet(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
