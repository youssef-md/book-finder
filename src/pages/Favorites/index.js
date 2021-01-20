import BookCard from '../../components/BookCard';
import Header from '../../components/Header';
import { useFavoritedBooks } from '../../hooks/favoritedBooks';
import { Container, BookFeed } from './styles';

export default function Favorites() {
  const { favoritedBooks } = useFavoritedBooks();

  return (
    <>
      <Header title="Favorites" />
      <Container>
        <BookFeed>
          {favoritedBooks?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </BookFeed>
      </Container>
    </>
  );
}
