import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HobbyFilterPipe'
})
export class HobbyFilterPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!items) {
      return []
    }
    if (!field) {
      return items
    }

    return items.filter(it => {
      return it.hobby.includes(field)
    })
  }

}
