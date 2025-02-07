import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
//     {
//     'path':'login',
//     component:LoginComponent
// },{
//     'path':'signup',
//     component:SignupComponent
// },
{
    'path':'',
    component:MainComponent,
    // canActivate:  [authGuard]
},{
    'path':'product',
    component:ProductComponent
},{
    'path':'admin',
    component:AdminComponent
},{
    'path':'cart',
    component:CartComponent
},{
    'path':'checkout',
    component:CheckoutComponent
},{ path: 'product/:id', 
    component: ProductDetailsComponent },
];
