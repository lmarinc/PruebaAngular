
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from '../componentes/saludo/saludo.component';
import {HeaderComponent} from '../componentes/header/header.component';
import {ContadorComponent} from '../componentes/contador/contador.component';
import {FormsModule} from '@angular/forms';
import {ListaTareaComponent} from '../componentes/ListaTarea/listaTarea.component';
import {TemporizadorComponent} from '../componentes/temporizador/temporizador.component';
import {ComentariosComponent} from '../componentes/comentarios/comentarios.component';
import {NgForOf} from '@angular/common';
import {ProductoComponent} from '../componentes/producto/producto.component';
import {CalculadoraComponent} from '../componentes/calculadora/calculadora.component';
import {CompraComponent} from '../componentes/compra/compra.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, HeaderComponent, FormsModule, ContadorComponent, ListaTareaComponent, TemporizadorComponent, ComentariosComponent, NgForOf,ProductoComponent,CalculadoraComponent,CompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Bienvenido';
  nombres: string[] = ['Luis', 'Rafa', 'Nahuel', 'Lucia'];
  nombreActual: string = this.nombres[0]; //

  cambiarNombre() {
    const indexActual = this.nombres.indexOf(this.nombreActual);

    if (indexActual === this.nombres.length - 1) {
      this.nombreActual = this.nombres[0];
    } else {
      this.nombreActual = this.nombres[indexActual + 1];
    }
  }
  comentariosRecibidos: string[] = [];
  recibirComentario(comentario: string) {
    this.comentariosRecibidos.push(comentario);
  }
}
