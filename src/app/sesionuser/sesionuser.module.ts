import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionuserPageRoutingModule } from './sesionuser-routing.module';

import { SesionuserPage } from './sesionuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionuserPageRoutingModule
  ],
  declarations: [SesionuserPage]
})
export class SesionuserPageModule {}
