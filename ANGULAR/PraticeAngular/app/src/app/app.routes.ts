
import { Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        'path':'learning',
        component:LearningComponent,
    },{
        'path':'',
        component:ProductComponent
    }
];