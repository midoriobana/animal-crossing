import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFilterPipe } from './pipes/name-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NameFilterPipe
  ],
  exports: [
    NameFilterPipe
  ]
})
export class SharedModule { }
