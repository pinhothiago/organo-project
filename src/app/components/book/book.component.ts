import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book = {
    title: "As ondas",
    author: "Virginia Woolf",
    image: "https://images-na.ssl-images-amazon.com/images/I/41sRHT1sFeL.jpg"
  }
}