import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { UserStorageService } from './modules/auth/services/user-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'quiz-ui';

  isUserLoggedIn:boolean = UserStorageService.isUserLoggedId();
  isAdminLoggedIn:boolean = UserStorageService.isAdminLoggedId();

  router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.isUserLoggedIn = UserStorageService.isUserLoggedId();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedId();
    })
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl("/login")
  }


}
