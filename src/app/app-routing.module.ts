import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'fishes',
      pathMatch: 'full'
  },
  {
    path: 'fishes',
    loadChildren: () => import('./fishes/fishes.module').then(m => m.FishesModule),

  },
  {
    path: 'insects',
    loadChildren: () => import('./insects/insects.module').then(m => m.InsectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
