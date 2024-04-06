import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrl: './lista-autos.component.css'
})
export class ListaAutosComponent implements OnInit {
  listaVehiculos: Array<any> = [];
  public rows:number = 10;
  public page:number = 1;
  public pages:number = 0;
  listaPaginas:Array<number> = [];

  private _filtro: string = "";
  get filtro(): string { return this._filtro; }
  set filtro(data: string) { this._filtro = data; }

  mostrarImagenes: boolean = false;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.consultarVehiculos();
  }

  consultarVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta => {
      if(respuesta.codigo == '1'){
        this.listaVehiculos = respuesta.data;
        this.pages = respuesta.pages;
        this.configurarPaginacion(respuesta.pages);
      }  
    });

  //  this.listaVehiculos = this.vehiculoService.getHardcodedList();
  }

  configurarPaginacion(pages:number ){
    this.listaPaginas = [];
    for(let i=1; i<=pages; i++){
      this.listaPaginas.push(i);
    }
  }

  cargarPagina(pagina:number){
    this.page = pagina;
    this.consultarVehiculos();
  }

  siguiente(){
    if(this.page < this.pages){
      this.cargarPagina(this.page+1);
    }
  }

  anterior(){
    if(this.page > 1){
      this.cargarPagina(this.page-1);
    }
  }

  mostrarImagen() {
    this.mostrarImagenes = !this.mostrarImagenes;
  }

  eliminar(codigo:string){
    Swal.fire({
      title: "Advertencia",
      text: "La eliminación de información es irrerversible. ¿Está seguro que querer continuar?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      icon: "warning"
    }).then( (res) =>{
      if(res.isConfirmed){
        this.vehiculoService.deleteVehiculo(codigo).subscribe( respuesta => {
          if(respuesta.codigo == '1'){
            this.consultarVehiculos();
            Swal.fire({
              title: "Mensaje",
              text: "El vehículo fue eliminado exitosamente",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "Mensaje",
              text: "Se produjo el siguiente error al tratar de eliminar el registro:" + respuesta.mensaje,
              icon: "error"
            });
          }
        });
      }
    });
  }
}