import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarCpasswordPage } from './recuperar-cpassword.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCpasswordPageRoutingModule {}
