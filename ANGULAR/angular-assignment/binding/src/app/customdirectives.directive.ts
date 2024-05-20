import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirectives]',
  standalone: true
})
export class CustomdirectivesDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
