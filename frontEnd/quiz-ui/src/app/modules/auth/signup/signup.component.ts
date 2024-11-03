import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  validateForm!:FormGroup;

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private message = inject(NzMessageService);


  ngOnInit(){
    this.validateForm = this.fb.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required]],
      name:[null, [Validators.required]]
    })
  }


  submitForm(){

  }



}


