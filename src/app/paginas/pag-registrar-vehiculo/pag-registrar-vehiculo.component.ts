import { Component } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pag-registrar-vehiculo',
  templateUrl: './pag-registrar-vehiculo.component.html',
  styleUrl: './pag-registrar-vehiculo.component.css'
})
export class PagRegistrarVehiculoComponent {
  vehiculo?: Vehiculo;
  formulario: FormGroup;

  constructor(
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      "anio": ['', [Validators.required]],
      "calificacion": ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      "codigo": ['', [Validators.required]],
      "foto": [],
      "kilometraje": ['', [Validators.required, Validators.min(0)]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "precio": ['', [Validators.required, Validators.min(0)]],
    });
  }

  grabar() {
    if (this.formulario.valid) {
      this.vehiculoService.postVehiculo({ ...this.formulario.value }).subscribe(
        respuesta => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: "Información",
              text: "El vehículo fue registrado exitosamente.",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
              this.router.navigate(['/vehiculos'])
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "Se produjo el siguiente error al registrar el vehículo: " + respuesta.mensaje,
              icon: "error"
            });
          }
        }
      );
    } else {
      Swal.fire({
        title: "Advertencia",
        text: "Faltan llenar todos los campos obligatorios",
        icon: "warning"
      });
    }
  }
}