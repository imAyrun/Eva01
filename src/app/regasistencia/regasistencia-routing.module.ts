import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegasistenciaPage } from './regasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegasistenciaPageRoutingModule {}
