import { Component,EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet,ReactiveFormsModule,LoginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Output() close = new EventEmitter<void>();
  @Output() showLogin = new EventEmitter<void>();
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : { mismatch: true };
  }

  onSignup() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }
  closeSignup(): void {
    this.close.emit();
  }

  openLogin(): void {
    this.showLogin.emit();
  }
}
