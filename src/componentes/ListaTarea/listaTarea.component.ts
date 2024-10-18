import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ListaTarea',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './listaTarea.component.html',
  styleUrl: './listaTarea.component.css'
})
export class ListaTareaComponent {
  tareas: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'];
  nuevaTarea: string = '';

  agregarTarea(): void {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number): void {
    this.tareas.splice(index, 1);
  }


}
