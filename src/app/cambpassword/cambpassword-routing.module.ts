import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambpasswordPage } from './cambpassword.page';

const routes: Routes = [
  {
    path: '',
    component: CambpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambpasswordPageRoutingModule {}
