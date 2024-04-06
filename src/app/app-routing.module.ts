import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { PagNotFoundComponent } from './paginas/pag-not-found/pag-not-found.component';
import { PagVehiculoComponent } from './paginas/pag-vehiculo/pag-vehiculo.component';
import { PagEditarVehiculoComponent } from './paginas/pag-editar-vehiculo/pag-editar-vehiculo.component';
import { PagRegistrarVehiculoComponent } from './paginas/pag-registrar-vehiculo/pag-registrar-vehiculo.component';
import { PagRegistrarClienteComponent } from './paginas/pag-registrar-cliente/pag-registrar-cliente.component';

const routes: Routes = [
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: ListaAutosComponent
  },
  {
    path: "vehiculo/:codigo",
    component: PagVehiculoComponent
  },
  {
    path: "editarVehiculo/:codigo",
    component: PagEditarVehiculoComponent
  },
  {
    path: "registrarVehiculo",
    component: PagRegistrarVehiculoComponent
  },
  {
    path: "registrarCliente",
    component: PagRegistrarClienteComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagNotFoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
