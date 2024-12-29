import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AdminService {

  BASIC_URL = 'http://localhost:8080';
  
  constructor(private http:HttpClient) { }

  createTest(testDTO:any):Observable<any>{
    return this.http.post(`${this.BASIC_URL}/api/test`,testDTO);
  }


  getAllTests():Observable<any>{
    return this.http.get(`${this.BASIC_URL}/api/test`);
  }

  addQuestionInTest(questionDTO:any):Observable<any>{
    return this.http.post(`${this.BASIC_URL}/api/test/question`,questionDTO);
  }


  getAllQuestionsInTest(testId:number):Observable<any>{
    return this.http.get(`${this.BASIC_URL}/api/test/${testId}`);
  }
   


}
