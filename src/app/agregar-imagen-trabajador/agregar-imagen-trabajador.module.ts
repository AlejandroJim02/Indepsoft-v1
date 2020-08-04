import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarImagenTrabajadorPageRoutingModule } from './agregar-imagen-trabajador-routing.module';

import { AgregarImagenTrabajadorPage } from './agregar-imagen-trabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarImagenTrabajadorPageRoutingModule
  ],
  declarations: [AgregarImagenTrabajadorPage]
})
export class AgregarImagenTrabajadorPageModule {}
