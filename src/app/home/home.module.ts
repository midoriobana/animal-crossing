import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { NameFilterPipe } from '../shared/pipes/name-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { CardVillagerComponent } from './card-villager/card-villager.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
    PaginationModule,
    NgxPaginationModule
  ],
  declarations: [
    HomeComponent,
    CardVillagerComponent
  ],
  exports:[
    CardVillagerComponent,
    PaginationModule,
    FormsModule
  ]
})
export class HomeModule { }