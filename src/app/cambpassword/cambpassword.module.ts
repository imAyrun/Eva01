import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambpasswordPageRoutingModule } from './cambpassword-routing.module';

import { CambpasswordPage } from './cambpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambpasswordPageRoutingModule
  ],
  declarations: [CambpasswordPage]
})
export class CambpasswordPageModule {}
