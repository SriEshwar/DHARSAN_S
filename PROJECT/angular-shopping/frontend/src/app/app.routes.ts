import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [{
    'path':'login',
    component:LoginComponent
},{
    'path':'signup',
    component:SignupComponent
},{
    'path':'',
    component:HomeComponent,
    // canActivate:  [authGuard]
},{
    'path':'product',
    component:ProductComponent
},{
    'path':'admin',
    component:AdminComponent
},{
    'path':'main',
    component:MainComponent
},{
    'path':'cart',
    component:CartComponent
},{
    'path':'checkout',
    component:CheckoutComponent
}];
