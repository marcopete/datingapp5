import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  modoRegistro = false;

  constructor() { }

  ngOnInit(): void {
  }

  indicadorDePeticionDeRegistro() {
    this.modoRegistro = !this.modoRegistro;
  }

  modoCancelarRegistro(event: boolean) {
    this.modoRegistro = event;
  }

}
