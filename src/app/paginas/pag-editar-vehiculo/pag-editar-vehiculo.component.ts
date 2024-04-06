import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pag-editar-vehiculo',
  templateUrl: './pag-editar-vehiculo.component.html',
  styleUrl: './pag-editar-vehiculo.component.css'
})
export class PagEditarVehiculoComponent implements OnInit {
  vehiculo?: Vehiculo;
  formulario: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      "anio": ['', [Validators.required]],
      "calificacion": ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      "codigo": [],
      "foto": [],
      "kilometraje": ['', [Validators.required, Validators.min(0)]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "precio": ['', [Validators.required, Validators.min(0)]],
    });
    this.formulario.controls['codigo'].disable();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(respuesta => {
        if (respuesta.codigo == '1') {
          this.vehiculo = respuesta.data;
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['foto'].setValue(this.vehiculo?.foto);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo cargar la información del vehículo. Intente nuevamente.",
            icon: "error"
          });
        }
      });
    });
  }

  grabar() {
    if (this.formulario.valid) {
      this.vehiculoService.putVehiculo({ ...this.formulario.value }, this.formulario.controls['codigo'].value).subscribe(respuesta => {
        if (respuesta.codigo == '1') {
          Swal.fire({
            title: "Información",
            text: "Vehículo actualizado exitosamente",
            icon: "success"
          }).then(() => {
            this.formulario.reset();
            this.router.navigate(['/vehiculos'])
          });
        }
      })
    } else {
      Swal.fire({
        title: "Advertencia",
        text: "Faltan llenar todos los campos obligatorios",
        icon: "warning"
      });
    }
  }
}