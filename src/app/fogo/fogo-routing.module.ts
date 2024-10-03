import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FogoPage } from './fogo.page';

const routes: Routes = [
  {
    path: '',
    component: FogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FogoPageRoutingModule {}
