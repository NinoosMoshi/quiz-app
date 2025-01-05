import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private BASIC_URL = 'http://localhost:8080';

  constructor(private http:HttpClient) { }


   getAllTests():Observable<any>{
      return this.http.get(`${this.BASIC_URL}/api/test`);
    }
    

   getAllQuestionsInTest(testId:number):Observable<any>{
      return this.http.get(`${this.BASIC_URL}/api/test/${testId}`);
    }



}
