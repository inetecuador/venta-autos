import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pag-registrar-cliente',
  templateUrl: './pag-registrar-cliente.component.html',
  styleUrl: './pag-registrar-cliente.component.css'
})
export class PagRegistrarClienteComponent {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.formulario = this.formBuilder.group({
      "apellido": ['', [Validators.required]],
      "contacto": [false],
      "email": [''],
      "nombre": ['', [Validators.required]],
      "password": ['', [Validators.required]],
      "telefono": ['']
    });
  }

  irAlInicio() {
    this.router.navigate(['/inicio'])
  }

  guardar() {
    if (this.formulario.valid) {
      this.clienteService.insertCliente({ ...this.formulario.value }).subscribe(
        respuesta => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: "Mensaje",
              text: "Cliente registrado con éxito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
              this.router.navigate(['/inicio'])
            });
          } else {
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar el cliente" + respuesta.mensaje,
              icon: "error"
            });
          }
        }
      );
    } else {
      Swal.fire({
        title: "Mensaje",
        text: "Faltan llenar campos",
        icon: "error"
      });
    }
  }
}