import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';
import { CuentaService } from '../_servicios/cuenta.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {
constructor(private cuentaServicio: CuentaService, private toastr: ToastrService) {}

  canActivate(): Observable<boolean> {
    return this.cuentaServicio.usuarioActual$.pipe(
      map(usuario => {
        if (usuario) return true;
        this.toastr.error('NO PASARAS! ACCEDIENDO SIN LOGIN AL SISTEMA');
      })
    )
  }
  
}
