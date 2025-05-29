import { Component, OnInit } from '@angular/core';
import { books } from '../../mock-books';
import { Book, Genre } from '../book/book';
import { GenresComponent } from "../genres/genres.component";

@Component({
  selector: 'app-book-list',
  imports: [GenresComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  genres: Genre[] = [];
  booksByGenre: Map<string, Book[]> = new Map();
  ngOnInit() {
    this.booksByGenre = new Map();
    books.forEach(element => {
      const genreId = element.genre.id
      if (!this.booksByGenre.has(genreId)) {
        this.booksByGenre.set(genreId, [])
      }

      this.booksByGenre.get(genreId)?.push(element)
    });

    this.genres = [
      {
        id: 'romance',
        value: 'Romance',
        books: this.booksByGenre.get('romance') ?? []
      },
      {
        id: 'mistery',
        value: 'Mistério',
        books: this.booksByGenre.get("mistery") ?? []
      },
      {
        id: 'fantasy',
        value: 'Fantasia',
        books: this.booksByGenre.get("fantasy") ?? []
      },
      {
        id: 'science-fiction',
        value: 'Ficção Científica',
        books: this.booksByGenre.get("science-fiction") ?? []
      },
      {
        id: 'technical',
        value: 'Técnicos',
        books: this.booksByGenre.get("technical") ?? []
      },
    ]
    console.log(this.booksByGenre)
  }
}
