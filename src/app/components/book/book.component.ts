import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  imports: [
    CommonModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book = input.required<Book>();

  setFavorite() {
    this.book().favorite = !this.book().favorite
  }

}