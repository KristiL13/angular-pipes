import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, paramName: string): any {
    if (value.length < 2) {
      return value;
    }
    return value.sort((a, b) => {
      const paramA = a[paramName];
      const paramB = b[paramName];
      if (paramA > paramB) {
        return 1;
      } else if (paramA < paramB) {
        return -1;
      }
      return 0;
    });
  }

}
