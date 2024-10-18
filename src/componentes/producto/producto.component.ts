import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() nombreProducto: string = 'Producto 1';
  @Input() descripcionProducto: string = 'Descripción del producto 1';
  @Input() precioProducto: number = 100;

}
