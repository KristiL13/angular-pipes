import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number /*, anotherArg: any*/) {
    if (value.length > limit) {
      console.log(value.length);
      // transform always needs to return something
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}