import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { Usuario } from '../_modelos/usuario';
import { CuentaService } from '../_servicios/cuenta.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  modelo: any = {};

  constructor(public cuentaServicio: CuentaService, private rutero: Router, private servicioToastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.cuentaServicio.login(this.modelo).subscribe(response => {
      this.rutero.navigateByUrl('/miembros');
      // this.logueado = true;
    }, error => {
      console.log(error);
      this.servicioToastr.error(error.error);
    })
  }

  logout() {
    this.cuentaServicio.logout();
    this.rutero.navigateByUrl('/');
  }

  // obtenerUsuarioActual() {
  //   this.cuentaServicio.usuarioActual$.subscribe(usuario => {
  //     this.logueado = !!usuario;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
