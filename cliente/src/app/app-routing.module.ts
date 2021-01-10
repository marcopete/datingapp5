import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionesComponent } from './atenciones/atenciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListasComponent } from './listas/listas.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MiembroDetalleComponent } from './miembros/miembro-detalle/miembro-detalle.component';
import { MiembroListaComponent } from './miembros/miembro-lista/miembro-lista.component';
import { AutorizacionGuard } from './_guards/autorizacion.guard';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AutorizacionGuard],
    children: [
      {path: 'miembros', component: MiembroListaComponent, canActivate: [AutorizacionGuard]},
      {path: 'miembros/:id', component: MiembroDetalleComponent},
      {path: 'listas', component: ListasComponent},
      {path: 'mensajes', component: MensajesComponent},
      {path: 'atenciones', component: AtencionesComponent},
    ]
  },
  {path: '**', component: InicioComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
