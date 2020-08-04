import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertTrabajadorModalPage } from './alert-trabajador-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AlertTrabajadorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertTrabajadorModalPageRoutingModule {}
