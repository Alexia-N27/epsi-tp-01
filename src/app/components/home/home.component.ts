import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPipe } from '../../pipes/format.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormatPipe],
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  title = 'Bienvenue sur BiblioTech';
}
