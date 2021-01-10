import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { CuentaService } from '../_servicios/cuenta.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  @Input() usuariosDesdeInicioComponent: any;
  @Output() cancelarRegistro = new EventEmitter();
  modelo: any = {};

  constructor(private cuentaServicio: CuentaService, private servicioToastr: ToastrService) { }

  ngOnInit(): void {
  }

  registrar() {
    this.cuentaServicio.registrar(this.modelo).subscribe(respuesta => {
      console.log(respuesta);
      this.cancelar();
    }, error => {
      console.log(error);
      this.servicioToastr.error(error.error);
    })
  }

  cancelar() {
    this.cancelarRegistro.emit(false);
  }

}
