import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink,LoginComponent,SignupComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor (@Inject(PLATFORM_ID) private platformId: Object){}
  showLogin = false;
  dropdownVisible = false;
  showSignup = false;


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
      });
  }
}
  


  openLogin(): void {
    this.showLogin = true;
    this.showSignup = false;
  }

  closeLogin(): void {
    this.showLogin = false;
  }

  openSignup(): void {
    this.showSignup = true;
    this.showLogin = false;
  }

  closeSignup(): void {
    this.showSignup = false;
  }
}
