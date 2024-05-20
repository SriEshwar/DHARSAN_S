import { Routes } from '@angular/router';
import { AccountHolderComponent } from './account-holder/account-holder.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {
        path:'account-holder',
        component:AccountHolderComponent
    },
    {
        path:'home',
        component:HomeComponent
    },{
        path:'contact',
        component:ContactComponent
    }
];
