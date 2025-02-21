import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/services/user-storage.service';

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

    submitTest(submitTestDTO:any):Observable<any>{
      return this.http.post(`${this.BASIC_URL}/api/test/submit-test`,submitTestDTO);
    }

    getTestResults():Observable<any>{
      return this.http.get(`${this.BASIC_URL}/api/test/test-result/${UserStorageService.getUserId()}`);
    }


}
