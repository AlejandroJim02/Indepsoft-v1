import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTrabajadorPage } from './home-trabajador.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTrabajadorPageRoutingModule {}
