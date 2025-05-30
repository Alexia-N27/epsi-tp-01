import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, BookCardComponent],
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  data: any[] = [];
  searchTerm: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des livres:', err);
      }
    });
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe({
      next: (updatedBook: Book) => {
        // TODO 16: Affiche une alerte qui indique que le favori a été modifié
        alert(`Le livre "${updatedBook.title}" a été ${updatedBook.isFavorite ? 'ajouté aux' : 'retiré des'} favoris.`);
        this.loadBooks();
      },
      error: (err: any) => {
        // TODO 17: Affiche une alerte qui indique que la modification du favori a échoué
        alert(`Échec de la modification du favori pour le livre "${book.title}".`);
        console.error('Erreur lors de la modification du favori:', err);
      }
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        // TODO 18: Affiche une alerte qui indique que le livre a été supprimé
        alert(`Livre supprimé avec succès.`);
        this.loadBooks();
      },
      error: (err: any) => {
        // TODO 19: Affiche une alerte qui indique que la suppression du livre a échoué
        alert(`La suppression du livre a échoué.`);
        console.error('Erreur lors de la suppression du livre:', err);
      }
    });
  }

  goToBookDetails(id: string): void {
    this.router.navigate(['/books', id]);
  }
}
