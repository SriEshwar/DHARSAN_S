import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, SignupComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();
  @Output() showSignup = new EventEmitter<void>();

  loginForm: FormGroup;
  passwordFieldType: string = 'password';
  loginError: string | null = null; // To handle login errors

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.loginError = null; // Reset login error
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.close.emit(); // Close the login popup
          this.router.navigate(['/product']); // Navigate to the main page after successful login
        },
        error: (err) => {
          this.loginError = 'Login failed. Please check your credentials.'; // Handle login error
          console.error('Login error:', err);
        }
      });
    } else {
      this.loginForm.markAllAsTouched(); 
    }
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  closeLogin(): void {
    this.close.emit();
  }

  openSignup(): void {
    this.showSignup.emit();
  }
}
