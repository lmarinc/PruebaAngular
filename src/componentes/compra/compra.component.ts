import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';

interface Articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

  articulos: Articulo[] = [
    {nombre: 'Manzana', precio: 1.50, cantidad: 2},
    {nombre: 'Pan', precio: 0.80, cantidad: 3},
    {nombre: 'Leche', precio: 1.20, cantidad: 4},
    {nombre: 'Queso', precio: 2.50, cantidad: 5}
  ];

  incrementarCantidad(articulo: Articulo): void {
    articulo.cantidad++;
  }

  decrementarCantidad(articulo: Articulo): void {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
    }
  }

  get totalCompra(): number {
    return this.articulos.reduce((total, articulo) => {
      return total + articulo.precio * articulo.cantidad;
    }, 0);
  }
}
