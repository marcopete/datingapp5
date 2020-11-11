import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'La aplicación de usuarios';
  usuarios: any;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.obtenerUsuarios();
  }

  // tslint:disable-next-line: typedef
  obtenerUsuarios() {
    this.http.get('https://localhost:5001/api/usuarios').subscribe(respuesta => {
      this.usuarios = respuesta;
    }, error => {
      console.log(error);
    });
  }
}
