import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }

  getGender(name: string) {

    return this.http.get<any>(`https://api.genderize.io?name=${name}`);
  
  }
}
