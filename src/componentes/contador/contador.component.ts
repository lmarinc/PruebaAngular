import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit, OnDestroy {
  horaActual: Date = new Date();  // Para almacenar la hora actual
  intervalo: any;                 // Para guardar el intervalo
  corriendo: boolean = true;      // Para controlar si el reloj está corriendo

  ngOnInit(): void {
    this.iniciarContador();
  }

  iniciarContador(): void {
    this.intervalo = setInterval(() => {
      this.horaActual = new Date();  // Actualiza la hora actual cada segundo
    }, 1000);
  }

  detenerContador(): void {
    if (this.corriendo) {
      clearInterval(this.intervalo);  // Detiene el intervalo
      this.corriendo = false;         // Actualiza el estado a detenido
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}
