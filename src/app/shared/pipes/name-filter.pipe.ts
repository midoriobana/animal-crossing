import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
