import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilSolicitantePageRoutingModule } from './perfil-solicitante-routing.module';

import { PerfilSolicitantePage } from './perfil-solicitante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilSolicitantePageRoutingModule
  ],
  declarations: [PerfilSolicitantePage]
})
export class PerfilSolicitantePageModule {}
