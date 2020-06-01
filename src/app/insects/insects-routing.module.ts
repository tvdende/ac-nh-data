import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsectsComponent } from './insects/insects.component';


const routes: Routes = [
  {
      path: '',
      component: InsectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsectsRoutingModule { }
