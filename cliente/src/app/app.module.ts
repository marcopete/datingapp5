import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { MiembroListaComponent } from './miembros/miembro-lista/miembro-lista.component';
import { MiembroDetalleComponent } from './miembros/miembro-detalle/miembro-detalle.component';
import { ListasComponent } from './listas/listas.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AtencionesComponent } from './atenciones/atenciones.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modulos/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    RegistrarComponent,
    MiembroListaComponent,
    MiembroDetalleComponent,
    ListasComponent,
    MensajesComponent,
    AtencionesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
