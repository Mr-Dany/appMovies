import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarmoviePage } from './buscarmovie.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarmoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarmoviePageRoutingModule {}
