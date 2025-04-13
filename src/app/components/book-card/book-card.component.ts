import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormatPipe } from '../../pipes/format.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FormatPipe, TruncatePipe, HighlightDirective],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() showActions: boolean = false;

  @Output() toggleFavorite = new EventEmitter<Book>();
  @Output() deleteBook = new EventEmitter<string>();
}

