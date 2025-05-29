import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { books } from '../../mock-books';
import { Genre } from '../book/book';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-genres',
  imports: [BookComponent, CommonModule],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent {
  genre = input.required<Genre>();
  book = books[0]
}
