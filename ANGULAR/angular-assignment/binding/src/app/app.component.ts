import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountHolderComponent } from './account-holder/account-holder.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CustomdirectivesDirective } from './customdirectives.directive';
import { CommonModule } from '@angular/common';
import { ShirtSizeComponent } from './shirt-size/shirt-size.component';
import { SizePipe } from './size.pipe';
import { ProductComponent } from './product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AccountHolderComponent,RouterLink,HomeComponent,ContactComponent,CustomdirectivesDirective,CommonModule,ShirtSizeComponent,SizePipe,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binding';
}
