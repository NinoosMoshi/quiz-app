import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../services/test.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from '../../../auth/services/user-storage.service';

@Component({
  selector: 'app-take-test',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './take-test.component.html',
  styleUrl: './take-test.component.scss'
})
export class TakeTestComponent implements OnInit {

  questions:any[] = [];
  testId:number;

  selectedAnswers:{[key:number]:string} = {};

  timeRemaining: number = 0;
  interval: any;
  constructor(private testService:TestService, 
    private activatedRoute:ActivatedRoute,
    private router:Router, 
    private message:NzMessageService) {
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.testId = +params.get('testId');

      this.testService.getAllQuestionsInTest(this.testId).subscribe(res=>{
        this.questions = res.questionDTOS;

        console.log(res)
        this.timeRemaining = res.testDTO.time || 0;
        this.startTimer();
      })
    })
  }

  startTimer(){
    this.interval = setInterval(()=>{
      if(this.timeRemaining > 0){
        this.timeRemaining--;
      }else {
        clearInterval(this.interval);
        this.submitAnswers();
      }
    }, 1000)
  }

  getFormattedTime(): string{
     const minutes = Math.floor(this.timeRemaining / 60);
     const seconds = this.timeRemaining % 60;
     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;  // 5:02
  }


  onAnswerChange(questionId:number, selectedOption:string){
    this.selectedAnswers[questionId] = selectedOption;
  }


  submitAnswers(){
    const answerList = Object.keys(this.selectedAnswers).map(questionId=>{
      return {
        questionId:+questionId,
        selectedOption:this.selectedAnswers[questionId]
      }
    })

     const data = {
      testId:this.testId,
      userId:UserStorageService.getUserId(),
      responses:answerList
     }

     this.testService.submitTest(data).subscribe({
      next: res => {
        this.message.success('You have successfully submitted your answers!', {nzDuration:5000});
        this.router.navigateByUrl('/user/view-test-results');
        
      },
      error: err => {
        this.message.error(`${err.error}`, {nzDuration:5000})
     }
  })

  }


}
