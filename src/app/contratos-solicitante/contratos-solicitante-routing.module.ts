import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratosSolicitantePage } from './contratos-solicitante.page';

const routes: Routes = [
  {
    path: '',
    component: ContratosSolicitantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratosSolicitantePageRoutingModule {}
