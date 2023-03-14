import { Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-card-villager',
  templateUrl: './card-villager.component.html'
})
export class CardVillagerComponent implements OnInit {

  @Input() villagers: any
  species: any = []
  hobbies: any = []
  specieFiltered: any = ''
  nameFiltered: any = ''
  genderFiltered: any = ''
  hobbyFiltered: any = ''
  
  itemsPerPage: number = 15
  page: any
  totalItems: number = 0

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.getSpecies()
      this.getHobbies()
    },
    3000)

  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event
  }

  getSpecies() {
    let chars = []
    this.villagers?.forEach(element => {
      chars.push(element.species)
    })
    this.species = chars.filter((element, index) => {
      return chars.indexOf(element) === index
    })
    return this.species
  }

  getHobbies() {
    let hobby = []
    this.villagers?.forEach(element => {
      hobby.push(element.hobby)
    })
    this.hobbies = hobby.filter((element, index) => {
      return hobby.indexOf(element) === index
    })
    return this.hobbies
  }

  limparInput() {
    this.genderFiltered = ''
    this.nameFiltered = ''
    this.specieFiltered = ''
    this.hobbyFiltered = ''
  }

}
