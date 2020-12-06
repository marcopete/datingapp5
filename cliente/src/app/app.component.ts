import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './_modelos/usuario';
import { CuentaService } from './_servicios/cuenta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'La aplicación de usuarios';
  usuarios: any;

  constructor(private cuentaService: CuentaService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.setearUsuarioActual();
  }

  setearUsuarioActual() {
    const usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cuentaService.setearUsuarioActual(usuario);
  }

}
