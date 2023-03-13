import { Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-card-villager',
  templateUrl: './card-villager.component.html'
})
export class CardVillagerComponent implements OnInit {

  nameFilter: any
  @Input() villagers: any
  itemsPerPage: number = 12
  page: any
  totalItems: number = 0

  constructor() { }

  ngOnInit() {
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page
  }

}
