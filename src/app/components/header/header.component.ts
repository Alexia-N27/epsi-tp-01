import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormatPipe } from '../../pipes/format.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormatPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';
}
