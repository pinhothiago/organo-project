import { Component } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { books } from '../../mock-books';

@Component({
  selector: 'app-genres',
  imports: [BookComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent {  
  book = books[0]
}
