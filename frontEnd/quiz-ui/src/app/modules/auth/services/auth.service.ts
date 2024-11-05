import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8080/api/auth'

  constructor(private http: HttpClient){}


  register(data):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/sign-up`,data);
  }


}
