import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountHolderComponent } from './account-holder/account-holder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AccountHolderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binding';
}
