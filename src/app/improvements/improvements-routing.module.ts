import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprovementsPage } from './improvements.page';

const routes: Routes = [
  {
    path: '',
    component: ImprovementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprovementsPageRoutingModule {}
