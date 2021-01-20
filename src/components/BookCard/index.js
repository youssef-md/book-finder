import { Heart } from 'react-feather';

import { Container } from './styles';
import Button from '../../components/Button';
import Chip from '../Chip';

const SLICE_LENGTH = 40;

export default function BookCard({ book }) {
  const {
    volumeInfo: { title, authors, categories, imageLinks },
  } = book;

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
        <Button>
          <Heart />
        </Button>
      </footer>
    </Container>
  );
}
