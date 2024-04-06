import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from './home/home.component';
import { ListaAutosComponent } from './lista-autos/lista-autos.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { RouterModule } from '@angular/router';
import { UtilitariosModule } from '../utilitarios/utilitarios.module';
import { PagVehiculoComponent } from './pag-vehiculo/pag-vehiculo.component';
import { PagEditarVehiculoComponent } from './pag-editar-vehiculo/pag-editar-vehiculo.component';
import { PagRegistrarVehiculoComponent } from './pag-registrar-vehiculo/pag-registrar-vehiculo.component';
import { PagRegistrarClienteComponent } from './pag-registrar-cliente/pag-registrar-cliente.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaAutosComponent,
    PagNotFoundComponent,
    PagVehiculoComponent,
    PagEditarVehiculoComponent,
    PagRegistrarVehiculoComponent,
    PagRegistrarClienteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitariosModule
  ],
  exports: []
})
export class PaginasModule { }
