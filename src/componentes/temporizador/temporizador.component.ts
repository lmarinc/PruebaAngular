import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  tiempoInicial: number = 0;
  tiempoRestante: number = 0;
  intervalo: any ;
  corriendo: boolean = false;

  iniciarTemporizador(): void {
    if(this.tiempoInicial > 0 && !this.corriendo){
      this.tiempoRestante = this.tiempoInicial;
      this.corriendo= true;
      this.intervalo = setInterval(() => {
        if(this.tiempoRestante > 0){
          this.tiempoRestante--;
        } else {
          this.detenerTemporizador();
        }
      }, 1000);
    }
  }
  detenerTemporizador(): void {
    clearInterval(this.intervalo);
    this.corriendo = false;
  }
  reiniciarTemporizador(): void {
    this.detenerTemporizador();
    this.tiempoRestante = 0;
    this.tiempoInicial = 0;
  }

}
