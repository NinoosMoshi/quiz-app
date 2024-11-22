import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm!:FormGroup;

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private message = inject(NzMessageService);

  constructor(private authService:AuthService){}


  ngOnInit(){
    this.validateForm = this.fb.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required]]
    })
  }

  submitForm(){
    this.authService.login(this.validateForm.value).subscribe({
      next:res =>{
        this.message.success(`Login success.`, {nzDuration:5000});
        const user = {id:res.id, role:res.role};
        UserStorageService.saveUser(user);
        if(UserStorageService.isAdminLoggedId()){
          this.router.navigateByUrl('/admin/dashboard')
        }
        else if(UserStorageService.isUserLoggedId()){
          this.router.navigateByUrl('/user/dashboard')
        }
      },
      error:err =>{
        this.message.error(`Bad Credentials`, {nzDuration:5000})
      }
    })
  }

}
