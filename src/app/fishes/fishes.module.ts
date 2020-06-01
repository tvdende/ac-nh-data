import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishesComponent } from './fishes/fishes.component';
import { FishesRoutingModule } from './fishes-routing.module';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FishesComponent],
  imports: [
    CommonModule,
    FishesRoutingModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
  ]
})
export class FishesModule { }
