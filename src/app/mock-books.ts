import { Book } from "./components/book/book";

export const books: Book[] = [ 
  {
    title: 'As ondas',
    author: 'Virginia Woolf',
    genre: {
      id: 'romance',
      value: 'Romance',
      books: []
    },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/81mQc+sz2OS._UF894,1000_QL80_.jpg',
  },
  {
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    genre: {
      id: 'realismo-magico',
      value: 'Realismo Mágico',
      books: []
    },
    favorite: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ofwq-sF2P4IN0_3uKa0hPRMY-4wzKYcqwQ&s',
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: {
      id: 'distopia',
      value: 'Distopia',
      books: []
    },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/819js3EQwbL.jpg',
  },
  {
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    genre: {
      id: 'classico',
      value: 'Clássico',
      books: []
    },
    favorite: false,
    image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg',
  },
  {
    title: 'O Apanhador no Campo de Centeio',
    author: 'J.D. Salinger',
    genre: {
      id: 'romance',
      value: 'Romance',
      books: []
    },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/71b3GDZMzSL.jpg',
  },
];
