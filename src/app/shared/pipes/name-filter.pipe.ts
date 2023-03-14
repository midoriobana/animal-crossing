import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NameFilterPipe'
})
export class NameFilterPipe implements PipeTransform {
 transform(items: any[], searchText: string): any[] {
    if (!items) {
      return []
    }
    if (!searchText) {
      return items
    }

    searchText = searchText.substring(0,1).toUpperCase() + searchText.substring(1).toLowerCase()

    return items.filter(it => {
      return it.name['name-USen'].includes(searchText)
    })
  }
}
