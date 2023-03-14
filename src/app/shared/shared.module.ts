<<<<<<< Updated upstream
=======
import { GenderFilterPipe } from './pipes/gender-filter.pipe';
import { SpecieFilterPipe } from './pipes/specie-filter.pipe';
>>>>>>> Stashed changes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { HobbyFilterPipe } from './pipes/hobby-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
<<<<<<< Updated upstream
    NameFilterPipe
  ],
  exports: [
    NameFilterPipe
=======
    NameFilterPipe,
    SpecieFilterPipe,
    GenderFilterPipe,
    HobbyFilterPipe
  ],
  exports: [
    NameFilterPipe,
    SpecieFilterPipe,
    GenderFilterPipe,
    HobbyFilterPipe
>>>>>>> Stashed changes
  ]
})
export class SharedModule { }
