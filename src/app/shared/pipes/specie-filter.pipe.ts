import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SpecieFilterPipe'
})
export class SpecieFilterPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!items) {
      return []
    }
    if (!field) {
      return items
    }

    return items.filter(it => {
      return it.species.includes(field)
    })
  }
}
