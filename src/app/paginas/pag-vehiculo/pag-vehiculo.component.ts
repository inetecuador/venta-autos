import { Component } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-pag-vehiculo',
  templateUrl: './pag-vehiculo.component.html',
  styleUrl: './pag-vehiculo.component.css'
})
export class PagVehiculoComponent {
  vehiculo?: Vehiculo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(respuesta => {
        debugger;
        if (respuesta.codigo == '1') {
          this.vehiculo = respuesta.data;
          if(this.vehiculo != null){
            if(this.vehiculo.foto =="" || this.vehiculo.foto == null)
              this.vehiculo.foto="https://img.freepik.com/free-vector/gradient-no-photo-sign_23-2149263898.jpg";
          }
        }
      });
    })
  }
}
