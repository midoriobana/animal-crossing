import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SpecieFilterPipe'
})
export class SpecieFilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    // I am unsure what id is here. did you mean title?
    return items.filter(item => item.indexOf(term) !== -1);
}

}
