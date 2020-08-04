import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchPage } from './switch.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchPageRoutingModule {}
