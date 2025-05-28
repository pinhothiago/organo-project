import { Component, OnInit } from '@angular/core';
import { books } from '../../mock-books';
import { Book, Genre } from '../book/book';

@Component({
  selector: 'app-book-list',
  imports: [],
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
        id: 'misterio',
        value: 'Mistério',
        books: this.booksByGenre.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.booksByGenre.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.booksByGenre.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.booksByGenre.get("tecnicos") ?? []
      },
    ]
    console.log(this.booksByGenre)
  }
}
