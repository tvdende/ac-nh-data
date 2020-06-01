import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsectsComponent } from './insects/insects.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { InsectsRoutingModule } from './insects-routing.module';



@NgModule({
  declarations: [InsectsComponent],
  imports: [
    CommonModule,
    InsectsRoutingModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
  ]
})
export class InsectsModule { }
