import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AEspacioPipe } from './pipes/AEspacio.pipe';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';

@NgModule({
  declarations: [
    AEspacioPipe,
    CalificacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AEspacioPipe,
    CalificacionComponent
  ]
})
export class UtilitariosModule { }
