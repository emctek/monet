import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { ListaComponent } from '../lista/lista.component';
import { DetallesComponent } from '../detalles/detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage,ListaComponent,DetallesComponent]
})
export class ProductosPageModule {}
