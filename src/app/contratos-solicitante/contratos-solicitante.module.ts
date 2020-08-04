import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratosSolicitantePageRoutingModule } from './contratos-solicitante-routing.module';

import { ContratosSolicitantePage } from './contratos-solicitante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratosSolicitantePageRoutingModule
  ],
  declarations: [ContratosSolicitantePage]
})
export class ContratosSolicitantePageModule {}
