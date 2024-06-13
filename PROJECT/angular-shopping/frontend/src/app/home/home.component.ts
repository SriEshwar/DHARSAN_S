import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild, Inject, PLATFORM_ID,EventEmitter} from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,LoginComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  currentSlide = 0;
  slides: HTMLElement[] = [];
  showLogin = false;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slides = this.carousel.nativeElement.querySelectorAll('.carousel-slide') as HTMLElement[];
      this.showSlide(this.currentSlide);

      setInterval(() => {
        this.moveSlide(1);
      }, 5000);
    }
  }

  showSlide(index: number): void {
    this.slides.forEach((slide, i) => {
      this.renderer.removeClass(slide, 'active');
      if (i === index) {
        this.renderer.addClass(slide, 'active');
      }
    });
  }

  moveSlide(direction: number): void {
    this.currentSlide += direction;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    } else if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
    this.showSlide(this.currentSlide);
  }

  openLogin() {
    console.log('Opening login...');
    this.showLogin = true;
    document.body.classList.add('blur-background');
  }

  closeLogin() {
    console.log('Closing login...');
    this.showLogin = false;
    document.body.classList.remove('blur-background');
  }
}
