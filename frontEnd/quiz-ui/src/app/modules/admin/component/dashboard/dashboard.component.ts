import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  tests = [];

  constructor(private notification:NzNotificationService, private testService:AdminService) { }

  ngOnInit(): void {
    this.getAllTests();
  }


  getAllTests(){
    this.testService.getAllTests().subscribe({
      next:(res:any)=>{
        this.tests = res;
      },
      error:(err:any)=>{
        this.notification.error('Error','Error while fetching tests',{nzDuration: 3000});
      }
    })
  }

  
  getFormattedTime(time:number){
    const minutes = Math.floor(time/60);
    const seconds = time %60;
    return `${minutes} minutes ${seconds} seconds`;
  }


}
