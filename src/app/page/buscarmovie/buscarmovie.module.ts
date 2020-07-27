import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarmoviePageRoutingModule } from './buscarmovie-routing.module';

import { BuscarmoviePage } from './buscarmovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarmoviePageRoutingModule
  ],
  declarations: [BuscarmoviePage]
})
export class BuscarmoviePageModule {}
