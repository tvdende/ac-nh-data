import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishesComponent } from './fishes/fishes.component';
import { FishesRoutingModule } from './fishes-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [FishesComponent],
  imports: [
    CommonModule,
    FishesRoutingModule,
    TableModule,
    InputTextModule
  ]
})
export class FishesModule { }
