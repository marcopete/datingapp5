import { Component, OnInit } from '@angular/core';
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
  modelo: any = {}
  // logueado: boolean;

  constructor(public cuentaServicio: CuentaService) { }

  ngOnInit(): void {
  }

  login() {
    this.cuentaServicio.login(this.modelo).subscribe(response => {
      console.log(response);
      // this.logueado = true;
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.cuentaServicio.logout();
    // this.logueado = false;
  }

  // obtenerUsuarioActual() {
  //   this.cuentaServicio.usuarioActual$.subscribe(usuario => {
  //     this.logueado = !!usuario;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
