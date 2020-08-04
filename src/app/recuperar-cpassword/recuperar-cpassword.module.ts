import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCpasswordPageRoutingModule } from './recuperar-cpassword-routing.module';

import { RecuperarCpasswordPage } from './recuperar-cpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCpasswordPageRoutingModule
  ],
  declarations: [RecuperarCpasswordPage]
})
export class RecuperarCpasswordPageModule {}
