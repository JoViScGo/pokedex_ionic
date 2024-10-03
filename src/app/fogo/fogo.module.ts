import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FogoPageRoutingModule } from './fogo-routing.module';

import { FogoPage } from './fogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FogoPageRoutingModule
  ],
  declarations: [FogoPage]
})
export class FogoPageModule {}
