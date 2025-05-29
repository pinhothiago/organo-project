import { Book } from "./components/book/book";

export const books: Book[] = [
  {
    title: 'As Ondas',
    author: 'Virginia Woolf',
    genre: { id: 'romance', value: 'Romance', books: [] },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/81mQc+sz2OS._UF894,1000_QL80_.jpg'
  },
  {
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    genre: { id: 'romance', value: 'Romance', books: [] },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/719esIW3D7L.jpg'
  },
  {
    title: 'Sherlock Holmes: Um Estudo em Vermelho',
    author: 'Arthur Conan Doyle',
    genre: { id: 'mistery', value: 'Mistério', books: [] },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    genre: { id: 'fantasy', value: 'Fantasia', books: [] },
    favorite: false,
    image: 'https://harpercollins.com.br/cdn/shop/products/9786555114249.jpg?v=1691738136'
  },
  {
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    genre: { id: 'fantasy', value: 'Fantasia', books: [] },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'Neuromancer',
    author: 'William Gibson',
    genre: { id: 'science-fiction', value: 'Ficção Científica', books: [] },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/91Bx5ilP+EL.jpg'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: { id: 'technical', value: 'Técnico', books: [] },
    favorite: false,
    image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UF894,1000_QL80_.jpg'
  },
];