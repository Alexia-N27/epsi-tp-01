import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { BackButtonComponent } from '../back-button/back-button.component';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, HighlightDirective, BackButtonComponent, BookCardComponent],
  templateUrl: 'book-detail.component.html',
})
export class BookDetailComponent implements OnInit {
  book!: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(id).subscribe({
        next: (book: Book) => {
          this.book = book;
        },
        error: (err: any) => {
          console.error(err);
          this.router.navigate(['/books']);
        }
      });
    }
  }

  updateRating(rating: number): void {
    this.bookService.updateBook(this.book.id, { rating: rating }).subscribe({
      next: (updatedBook: Book) => {
        console.log('Nouvelle note:', updatedBook);
      },
      error: (err: any) => {
        console.error('Erreur lors de la mise à jour de la note:', err);
      }
    });
  }

  goBack(): void {
    // TODO 8 : Créer un bouton qui permet de revenir à la page précédente
    this.location.back();
  }
}
