import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertTrabajadorModalPageRoutingModule } from './alert-trabajador-modal-routing.module';

import { AlertTrabajadorModalPage } from './alert-trabajador-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertTrabajadorModalPageRoutingModule
  ],
  declarations: [AlertTrabajadorModalPage]
})
export class AlertTrabajadorModalPageModule {}
