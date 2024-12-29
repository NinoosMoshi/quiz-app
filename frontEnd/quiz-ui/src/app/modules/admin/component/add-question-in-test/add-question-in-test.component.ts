import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-question-in-test',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-question-in-test.component.html',
  styleUrl: './add-question-in-test.component.scss'
})
export class AddQuestionInTestComponent implements OnInit {

  testId:number | null;
  questionForm!:FormGroup;

  constructor(
    private adminService:AdminService,
    private fb:FormBuilder,
    private router:Router,
    private notification:NzNotificationService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      questionText: [null, [Validators.required]],
      optionA: [null, [Validators.required]],
      optionB: [null, [Validators.required]],
      optionC: [null, [Validators.required]],
      optionD: [null, [Validators.required]],
      correctOption: [null, [Validators.required]],
    });

    this.testId = this.activatedRoute.snapshot.params['testId'];
  }


  submitForm(){
    const questionDTO = this.questionForm.value;
    questionDTO.id = this.testId;
    this.adminService.addQuestionInTest(questionDTO).subscribe({
      next:(res:any)=>{
        this.notification.success('SUCCESS',`Question added successfully`,{nzDuration: 3000});
        this.router.navigate(['/admin/dashboard']);
      },
      error:(err:any)=>{
        this.notification.error('ERROR',`${err.error}`,{nzDuration: 3000});
      }
    })
}


}