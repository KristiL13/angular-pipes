import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // I can force the filter pipe to re-run every time the data on the page
  // changes by adding pure: false. Be aware, this may cause performance issues.
  // It's recalculated whenever ANYTHING changes on the page.
  // The default value is pure: true, and it doesn't need to be added.
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      // if (item.status === filterString){
      if (item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
