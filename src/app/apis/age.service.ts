import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor(private http: HttpClient) { }


  getAge(name: string) {

    return this.http.get<any>(`https://api.agify.io/?name=${name}`);
  
  }
  
}
