import { VillagersService } from './../shared/providers/villagers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  villagers: any
  filter: any
  species: any = []
  hobbies: any = []
  speciefiltered: any
  nameFiltered: any 
  
  constructor(
    private villagerService: VillagersService
  ) { }

  ngOnInit() {
    this.getAllVillagers()
  }

  async getAllVillagers() {
    this.villagers = await this.villagerService.getAllVillagers()
    this.getSpecies()
    this.getHobbies()
  }

  getSpecies() {
    let chars = []
    this.villagers.forEach(element => {
      chars.push(element.species)
    })
    this.species = chars.filter((element, index) => {
      return chars.indexOf(element) === index
    })
    return this.species
  }

  getHobbies() {
    let hobby = []
    this.villagers.forEach(element => {
      hobby.push(element.hobby)
    })
    this.hobbies = hobby.filter((element, index) => {
      return hobby.indexOf(element) === index
    })
    return this.hobbies
  }
}
