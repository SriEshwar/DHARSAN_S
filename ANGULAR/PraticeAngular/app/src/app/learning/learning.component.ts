import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  hrefUrl = 'https://www.google.com/';
  message = ''
  name = ''
  hello (){
    this.message = 'Im learning for review';
  }
  fontSize : number = 16;
}
