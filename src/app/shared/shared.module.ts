import { SpecieFilterPipe } from './pipes/specie-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFilterPipe } from './pipes/name-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NameFilterPipe,
    SpecieFilterPipe
  ],
  exports: [
    NameFilterPipe,
    SpecieFilterPipe
  ]
})
export class SharedModule { }
