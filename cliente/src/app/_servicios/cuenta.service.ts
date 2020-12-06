import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../_modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  urlBase = 'https://localhost:5001/api/';
  private fuenteActualUsuario = new ReplaySubject<Usuario>(1);
  usuarioActual$ = this.fuenteActualUsuario.asObservable();

  constructor(private http: HttpClient) { }

  login(modelo: any) {
    return this.http.post(this.urlBase + 'cuenta/login', modelo).pipe(
      map((response: Usuario) => {
        const usuario = response;
        if (usuario) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.fuenteActualUsuario.next(usuario);
        }
      })
    )
  }

  registrar(modelo: any) {
    return this.http.post(this.urlBase + 'cuenta/registrar', modelo).pipe(
      map((usuario: Usuario) => {
        if ((usuario)) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.fuenteActualUsuario.next(usuario);
        }
      })
    )
  }

  setearUsuarioActual(usuario: Usuario) {
    this.fuenteActualUsuario.next(usuario);
  }

  logout() {
    localStorage.removeItem('usuario');
    this.fuenteActualUsuario.next(null);
  }
}
