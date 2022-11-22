import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  constructor(private http: HttpClient) { }

  getNationality(name: string) {

    return this.http.get<any>(`https://api.nationalize.io/?name=${name}`);
  
  }
}
