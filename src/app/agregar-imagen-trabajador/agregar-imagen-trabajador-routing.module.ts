import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarImagenTrabajadorPage } from './agregar-imagen-trabajador.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarImagenTrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarImagenTrabajadorPageRoutingModule {}
