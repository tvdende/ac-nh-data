import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FishesComponent } from './fishes/fishes.component';


const routes: Routes = [
  {
      path: '',
      component: FishesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishesRoutingModule { }
