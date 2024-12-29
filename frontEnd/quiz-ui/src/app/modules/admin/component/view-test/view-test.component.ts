import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-test',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.scss'
})
export class ViewTestComponent implements OnInit{

  questions:any[]= [];
  testId:any;

  constructor(private adminService:AdminService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.testId = +params.get('testId');

      this.adminService.getAllQuestionsInTest(this.testId).subscribe(res=>{
        this.questions = res.questionDTOS;
      })
    })
  }

}
