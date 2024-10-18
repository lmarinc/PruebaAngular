import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentario: string = '';
  comentarios: string[] = ['Comentario 1', 'Comentario 2', 'Comentario 3', 'Comentario 4'];

  @Output() comentarioEnviado = new EventEmitter<string>();

  agregarComentario() {
    if (this.comentario.trim()) {
      this.comentarios.push(this.comentario);
      this.comentarioEnviado.emit(this.comentario);
      this.comentario = '';
    }
  }



}
