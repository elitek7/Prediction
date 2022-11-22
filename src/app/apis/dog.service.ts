import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }


  getDogPicture() {

    return this.http.get<any>("https://dog.ceo/api/breeds/image/random");
  
  }


}
