import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Container } from './styles';
import Button from '../../components/Button';
import Chip from '../Chip';
import { useFavoritedBooks } from '../../hooks/favoritedBooks';

const SLICE_LENGTH = 40;

export default function BookCard({ book }) {
  const {
    id,
    volumeInfo: { title, authors, categories, imageLinks },
  } = book;

  const { checkIsFavorited, addBook, removeBook } = useFavoritedBooks();
  const isFavorited = checkIsFavorited(id);

  return (
    <Container>
      <img src={imageLinks?.thumbnail} alt={title} />
      <p>
        {title.length > SLICE_LENGTH
          ? `${title.slice(0, SLICE_LENGTH)}...`
          : title}
      </p>

      <div className="inline">
        {authors?.map((author) => (
          <Chip key={author} text={author} />
        ))}
        {categories?.map((category) => (
          <Chip key={category} text={category} />
        ))}
      </div>

      <footer>
        <Button>Ver detalhes</Button>
        <Button
          onClick={isFavorited ? () => removeBook(book) : () => addBook(book)}
        >
          {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
        </Button>
      </footer>
    </Container>
  );
}
