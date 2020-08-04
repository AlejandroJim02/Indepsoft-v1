import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilSolicitantePage } from './perfil-solicitante.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilSolicitantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSolicitantePageRoutingModule {}
