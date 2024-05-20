import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size',
  standalone: true
})
export class SizePipe implements PipeTransform {

  transform(value: number, ): string {
    if (value >= 36 && value < 38) {
      return 'Medium';
    } else if (value >= 38 && value < 42) {
      return 'Large';
    } else if (value >= 42) {
      return 'Extra Large';
    } else {
      return 'Unknown Size';
    }
  }

}
