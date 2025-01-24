import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../services/test.service';
import { NzMessageService } from 'ng-zorro-antd/message';

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
      })
    })
  }


  onAnswerChange(questionId:number, selectedOption:string){
    this.selectedAnswers[questionId] = selectedOption;
    console.log(this.selectedAnswers);
  }


}
