import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input() nombre: string = 'Invitado';

}
