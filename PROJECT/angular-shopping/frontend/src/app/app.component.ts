import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HomeComponent,LoginComponent,SignupComponent,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule,ProductComponent,AdminComponent,MainComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
