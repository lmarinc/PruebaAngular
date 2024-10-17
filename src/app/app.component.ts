
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from '../componentes/saludo/saludo.component';
import {HeaderComponent} from '../componentes/header/header.component';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, HeaderComponent, FormsModule],
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
}
