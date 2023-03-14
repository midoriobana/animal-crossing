import { VillagersService } from './../shared/providers/villagers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
<<<<<<< Updated upstream
=======

  villagers: any
>>>>>>> Stashed changes
  
  villagers: any

  constructor(
    private villagerService: VillagersService
  ) { }

  ngOnInit() {
    this.getAllVillagers()
  }

  async getAllVillagers(){
    this.villagers = await this.villagerService.getAllVillagers()
  }

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
}
