import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GenderFilterPipe'
})
export class GenderFilterPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!items) {
      return []
    }
    if (!field) {
      return items
    }

    return items.filter(it => {
      return it.gender.includes(field)
    })
  }
}
