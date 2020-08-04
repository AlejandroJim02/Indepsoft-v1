import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTrabajadorPageRoutingModule } from './home-trabajador-routing.module';

import { HomeTrabajadorPage } from './home-trabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTrabajadorPageRoutingModule
  ],
  declarations: [HomeTrabajadorPage]
})
export class HomeTrabajadorPageModule {}
