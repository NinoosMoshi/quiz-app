import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../services/auth.service';

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

  constructor(private authService:AuthService){}


  ngOnInit(){
    this.validateForm = this.fb.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required]],
      name:[null, [Validators.required]]
    })
  }


  submitForm(){
    this.authService.register(this.validateForm.value).subscribe({
      next:res =>{
        this.message.success(`Signup successfully!`, {nzDuration:5000})
        this.router.navigateByUrl("/login")
      },
      error:err =>{
        this.message.error(`${err.error}`, {nzDuration:5000})
      }
    })
  }



}


