import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SizePipe } from '../size.pipe';

@Component({
  selector: 'app-shirt-size',
  standalone: true,
  imports: [FormsModule,SizePipe],
  templateUrl: './shirt-size.component.html',
  styleUrl: './shirt-size.component.css'
})
export class ShirtSizeComponent {
  size:number=0;
}
