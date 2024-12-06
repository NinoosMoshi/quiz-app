import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.scss'
})
export class CreateTestComponent implements OnInit {

  testService = inject(AdminService);
  notification = inject(NzNotificationService);
  router = inject(Router);
  fb = inject(FormBuilder);
  testForm: FormGroup;

 ngOnInit(): void {
  this.testForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    time: [null, Validators.required],
  });
}

submitForm(){
  if(this.testForm.valid){
     this.testService.createTest(this.testForm.value).subscribe(res=>{
      this.notification.success(
        'Success',
        'Test created successfully',
        {nzDuration: 5000}
      );
      this.router.navigateByUrl('/admin/dashboard');
    },error=>{
      this.notification.error(
        'Error',
        `${error.error}`,
        {nzDuration: 5000}
      );
    })
  }
}

 

 



}
