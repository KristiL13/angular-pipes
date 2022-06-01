import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any /*, ...args: any[]*/) {
    if (value.length > 13) {
      console.log(value.length);
      // transform always needs to return something
      return value.substr(0, 13) + ' ...';
    }
    return value;
  }
}