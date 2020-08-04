import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchPageRoutingModule } from './switch-routing.module';

import { SwitchPage } from './switch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchPageRoutingModule
  ],
  declarations: [SwitchPage]
})
export class SwitchPageModule {}
