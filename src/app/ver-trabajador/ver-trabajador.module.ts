import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerTrabajadorPageRoutingModule } from './ver-trabajador-routing.module';

import { VerTrabajadorPage } from './ver-trabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerTrabajadorPageRoutingModule
  ],
  declarations: [VerTrabajadorPage]
})
export class VerTrabajadorPageModule {}
