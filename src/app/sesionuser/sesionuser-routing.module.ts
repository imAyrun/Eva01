import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionuserPage } from './sesionuser.page';

const routes: Routes = [
  {
    path: '',
    component: SesionuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionuserPageRoutingModule {}
